use regex::Regex;
use super::ScanResultItem;

pub fn scan_for_xhttp_usage(input_script: String) -> ScanResultItem {
    let pattern = r"new\sXMLHttpRequest\(\)";
    let re = Regex::new(pattern).unwrap();
    let score = match re.is_match(&input_script) { true => 5, false => 0 };
    ScanResultItem {
        name: "Check for HTTP requests in the script.".to_string(),
        detection_guidance: "The script contains a XMLHTTPRequest. Under normal circumstances this \
                             is legitimate and expected behaviour, so cannot be used as an example \
                             of malicous activity. However, when combined with other IoCs (such as \
                             known bad URLS) can provide evidence of data extraction.".to_string(),
        score: score
    }
}

pub fn scan_for_base64_functions(input_script: String) -> ScanResultItem {
    let pattern = r"btoa\(|atob\(";
    let re = Regex::new(pattern).unwrap();
    let score = match re.is_match(&input_script) { true => 5, false => 0 };
    ScanResultItem {
        name: "Check for usage of base64-related functions".to_string(),
        detection_guidance: "The script performs calls to encode or decode Base64 data. This is \
                             common functionality in both legitimate and malicious activity. Use \
                             it in combination with other IoCs to for higher fidelity.".to_string(),
        score: score
    }
}
