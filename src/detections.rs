pub mod code_execution;
pub mod obfuscated_info_stealer;
pub mod keylogger;
pub mod common;

use code_execution::CODE_EXECUTION_SCANNER;
use keylogger::KEYLOGGER_SCANNER;
use obfuscated_info_stealer::OBFUSCATED_INFO_STEALER_SCANNER;
use std::sync::LazyLock;

#[derive(Debug, PartialEq)]
pub enum Severity {
    Clean,
    Info,
    Alert,
    Critical
}

#[derive(Default)]
pub struct ScanResultItem {
    pub name: String,
    pub detection_guidance: String,
    pub score: u32
}

pub struct ScanResult {
    pub score: u32,
    pub severity: Severity,
    pub items: Vec<ScanResultItem>
}

// The logic required to detect a malicious script is highly dependant on the script itself. The
// pupose of this class is to provide shared functionality and to leave room for the nuances of
// different use cases. The object will be instantiated with a name, then as many differnet checks
// can be added as required. Each of these checks will be performed in turn to provide the result
// of the scan.
pub struct Scanner {
    pub name: String,
    scans: Vec<fn(String) -> ScanResultItem>
}

impl Scanner {
    fn new(name: String) -> Self {
        Self { name: name, scans: Vec::new() }
    }

    fn add_scan_function(&mut self, scan: fn(String) -> ScanResultItem) {
        self.scans.push(scan);
    }

    pub fn scan_for_ioc(&self, input_script: String) -> ScanResult {
        let mut items = Vec::new();
        for scan in &self.scans {
            let item = scan(input_script.clone()); 
            // Only want to add to scan result if there is something worth looking at.
            if item.score > 0 {
                items.push(item);
            }
        }
        let score = std::cmp::min(items.iter().map( |item| item.score ).sum(), 100);
        let severity = match score {
            0 => Severity::Clean,
            1..=24 => Severity::Info,
            25..=74 => Severity::Alert,
            _ => Severity::Critical
        };

        ScanResult { score, severity, items }
    }
}

pub static SCANNERS: LazyLock<Vec<&'static Scanner>> = LazyLock::new(|| {
    let mut scanners = Vec::new();
    scanners.push(&*CODE_EXECUTION_SCANNER);
    scanners.push(&*OBFUSCATED_INFO_STEALER_SCANNER);
    scanners.push(&*KEYLOGGER_SCANNER);
    scanners
});

