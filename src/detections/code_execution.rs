use std::sync::LazyLock;
use regex::Regex;
use super::ScanResultItem;
use super::Scanner;
use crate::detections::common::scan_for_xhttp_usage;

fn scan_for_array_access(input_script: String) -> ScanResultItem {
    let pattern = r"document\.scripts\[document\.scripts\.length\s-\s2\]\.text";
    let re = Regex::new(pattern).unwrap();
    let score = match re.is_match(&input_script) { true => 10, false => 0 };
    ScanResultItem {
        name: "Check for specific array access".to_string(),
        detection_guidance: "There is logic in one type of code execution scipts that retrieves \
                             the second to last element from the array of scipts loaded into the \
                             web page. On it's own, this isn't malicious behaviour, but can be \
                             paired with other IoCs to increase detection fidelity.".to_string(),
        score: score
    }
}

fn scan_for_url(input_script: String) -> ScanResultItem {
    let pattern = r"sspapi\.zenyou\.71360\.com/js";
    let re = Regex::new(pattern).unwrap();
    let score = match re.is_match(&input_script) { true => 50, false => 0 };
    ScanResultItem {
        name: "Check for known bad URL".to_string(),
        detection_guidance: "The script contains a hard-coded URL with a history of malicious \
                             activity".to_string(),
        score: score
    }
}

fn scan_for_arbitrary_code_execution(input_script: String) -> ScanResultItem {
    let pattern = r#"document.write\(['"]<script\ssrc\s?=|window\.execScript\(|window\.eval\("#;
    let re = Regex::new(pattern).unwrap();
    let score = match re.is_match(&input_script) { true => 75, false => 0 };
    ScanResultItem {
        name: "Check for functions that allow for arbitrary code execution".to_string(),
        detection_guidance: "The script contains logic that allows artbitrary JavaScript to be \
                             executed in the current browswer context. This sort of activity \
                             should be investigated fully.".to_string(),
        score: score
    }
}

pub static CODE_EXECUTION_SCANNER: LazyLock<Scanner> = LazyLock::new(|| {
    let mut scanner = Scanner::new("Artbitrary Code Execution".to_string());
    scanner.add_scan_function(scan_for_array_access);
    scanner.add_scan_function(scan_for_url);
    scanner.add_scan_function(scan_for_arbitrary_code_execution);
    scanner.add_scan_function(scan_for_xhttp_usage);
    scanner
});
