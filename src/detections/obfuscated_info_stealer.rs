use regex::Regex;
use std::sync::LazyLock;
use super::ScanResultItem;
use super::Scanner;
use crate::detections::common::scan_for_base64_functions;

fn scan_for_string_identifiers(input_script: String) -> ScanResultItem {
    let pattern = r"bmmuw|vnskp_param|vnskp_type";
    let re = Regex::new(pattern).unwrap();
    let score = match re.is_match(&input_script) { true => 40, false => 0 };
    ScanResultItem {
        name: "Check for specific string IoCs".to_string(),
        detection_guidance: "The obfuscated code sample this scanner has matched on uses specific \
                             identifiers that are uncommon words. It is possible that these will \
                             appear outside of this script, but unlikely. Combine this IoC with \
                             others for higher fidelity.".to_string(),
        score: score
    }
}

fn scan_for_url(input_script: String) -> ScanResultItem {
    let pattern = r"aHR0cHM6Ly9jZG4tcmVwb3J0LmNvbS9zdGF0dXMv|h..ps://cdn-report\.com/status";
    let re = Regex::new(pattern).unwrap();
    let score = match re.is_match(&input_script) { true => 50, false => 0 };
    ScanResultItem {
        name: "Check for known bad URL".to_string(),
        detection_guidance: "The script contains a hard-coded URL with a history of malicious \
                             activity.".to_string(),
        score: score
    }
}

fn scan_for_base64_encoded_array(input_script: String) -> ScanResultItem {
    // One of the ids that this script is searching for base64 encoded should be enough
    // to match on. Legitimate operations wouldn't need to obfuscate this.
    let pattern = r"aW5wdXQtcGF5bWVudC1maXJzdG5hbWU|JpbnB1dC1wYXltZW50LWxhc3RuYW1lI|\
                    aW5wdXQtZmlyc3RuYW1l|aW5wdXQtbGFzdG5hbWU|mlucHV0LWNjLW93bmVyI|\
                    aW5wdXQtY2MtbnVtYmVy|aW5wdXQtY2MtZXhwaXJlLWRhdGU|\
                    JjY19leHBpcmVfZGF0ZV95ZWFy|mlucHV0LWNjLWN2djI";
    let re = Regex::new(pattern).unwrap();
    let score = match re.is_match(&input_script) { true => 50, false => 0 };
    ScanResultItem {
        name: "Check for base64-encoded IoCs".to_string(),
        detection_guidance: "The script contains an array of elements that it searches for on the \
                             webpage that has been Base64 encoded. This scan looks for the encoded \
                             strings. It is possible, but unlikely, that these strings are used in \
                             many other scripts, so combine this IoC with others for better \
                             fidelity.".to_string(),
        score: score
    }
}

fn scan_for_customer_data_usage(input_script: String) -> ScanResultItem {
    let pattern = r#"customerData\s!=\s["']undefined["']"#;
    let re = Regex::new(pattern).unwrap();
    let score = match re.is_match(&input_script) { true => 10, false => 0 };
    ScanResultItem {
        name: "Check for customerData being accessed".to_string(),
        detection_guidance: "The script checks for the existence of a customerData object, which \
                             could indicate that it is collecting customer information. However, \
                             it is likely that this logic would appear in legitimate situations, \
                             so combine this IoC with others for higher fidelity.".to_string(),
        score: score
    }
}

pub static OBFUSCATED_INFO_STEALER_SCANNER: LazyLock<Scanner> = LazyLock::new(|| {
    let mut scanner = Scanner::new("Obfuscated Info Stealer".to_string());
    scanner.add_scan_function(scan_for_string_identifiers);
    scanner.add_scan_function(scan_for_url);
    scanner.add_scan_function(scan_for_base64_encoded_array);
    scanner.add_scan_function(scan_for_customer_data_usage);
    scanner.add_scan_function(scan_for_base64_functions);
    scanner
});
