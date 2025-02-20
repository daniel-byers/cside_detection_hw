use regex::Regex;
use std::sync::LazyLock;
use crate::detections::common::scan_for_xhttp_usage;
use super::ScanResultItem;
use super::Scanner;

fn scan_for_url(input_script: String) -> ScanResultItem {
    let pattern = r"h..ps?://something\.refreshment\.ltd";
    let re = Regex::new(pattern).unwrap();
    let score = match re.is_match(&input_script) { true => 50, false => 0 };
    ScanResultItem {
        name: "Check for known bad URL".to_string(),
        detection_guidance: "The script contains a hard-coded URL with a history of malicious \
                             activity".to_string(),
        score: score
    }
}

fn scan_for_keydown_event_listner(input_script: String) -> ScanResultItem {
    let pattern = r#"window\.addEventListener\(['"]keydown"#;
    let re = Regex::new(pattern).unwrap();
    let score = match re.is_match(&input_script) { true => 70, false => 0 };
    ScanResultItem {
        name: "Check for known bad URL".to_string(),
        detection_guidance: "The script contains logic that maps an event listener to the \
                             'keydown' event. It is worth investigating this activity to determine \
                             what the handler is using the keystrokes for, as it could indicate \
                             that sensitive information is being recorded.".to_string(),
        score: score
    }
}

pub static KEYLOGGER_SCANNER: LazyLock<Scanner> = LazyLock::new(|| {
    let mut scanner = Scanner::new("Keylogger".to_string());
    scanner.add_scan_function(scan_for_url);
    scanner.add_scan_function(scan_for_xhttp_usage);
    scanner.add_scan_function(scan_for_keydown_event_listner);
    scanner
});
