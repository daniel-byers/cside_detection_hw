use std::fs;
use std::env;
use std::path::PathBuf;
use cside_detection_hw::detections::code_execution::CODE_EXECUTION_SCANNER;
use cside_detection_hw::detections::obfuscated_info_stealer::OBFUSCATED_INFO_STEALER_SCANNER;
use cside_detection_hw::detections::keylogger::KEYLOGGER_SCANNER;
use cside_detection_hw::detections::Severity;

#[test]
fn it_scans_eval_script() {
    let crate_root: PathBuf = env::current_dir().expect("Couldn't get cwd");
    let filename = crate_root.join("test_cases/1_eval.js");
    let contents = fs::read_to_string(&filename).unwrap_or_else(|e| {
        eprintln!("Error reading file {}: {}", filename.display(), e);
        std::process::exit(1);
    });

    let result = CODE_EXECUTION_SCANNER.scan_for_ioc(contents.clone());
    assert_eq!(result.score, 100);
    assert_eq!(result.severity, Severity::Critical);
    assert_eq!(result.items.len(), 4);

    let result = OBFUSCATED_INFO_STEALER_SCANNER.scan_for_ioc(contents.clone());
    assert_eq!(result.score, 0);
    assert_eq!(result.severity, Severity::Clean);
    assert_eq!(result.items.len(), 0);

    let result = KEYLOGGER_SCANNER.scan_for_ioc(contents.clone());
    assert_eq!(result.score, 5);
    assert_eq!(result.severity, Severity::Info);
    assert_eq!(result.items.len(), 1);
}

#[test]
fn it_scans_obfuscated_info_stealer_script() {
    let crate_root: PathBuf = env::current_dir().expect("Couldn't get cwd");
    let filename = crate_root.join("test_cases/2_obfuscated.js");
    let contents = fs::read_to_string(&filename).unwrap_or_else(|e| {
        eprintln!("Error reading file {}: {}", filename.display(), e);
        std::process::exit(1);
    });

    let result = CODE_EXECUTION_SCANNER.scan_for_ioc(contents.clone());
    assert_eq!(result.score, 0);
    assert_eq!(result.severity, Severity::Clean);
    assert_eq!(result.items.len(), 0);

    let result = OBFUSCATED_INFO_STEALER_SCANNER.scan_for_ioc(contents.clone());
    assert_eq!(result.score, 100);
    assert_eq!(result.severity, Severity::Critical);
    assert_eq!(result.items.len(), 5);

    let result = KEYLOGGER_SCANNER.scan_for_ioc(contents.clone());
    assert_eq!(result.score, 0);
    assert_eq!(result.severity, Severity::Clean);
    assert_eq!(result.items.len(), 0);
}
#[test]

fn it_scans_clean_script() {
    let crate_root: PathBuf = env::current_dir().expect("Couldn't get cwd");
    let filename = crate_root.join("test_cases/3_clean.js");
    let contents = fs::read_to_string(&filename).unwrap_or_else(|e| {
        eprintln!("Error reading file {}: {}", filename.display(), e);
        std::process::exit(1);
    });

    let result = CODE_EXECUTION_SCANNER.scan_for_ioc(contents.clone());
    assert_eq!(result.score, 0);
    assert_eq!(result.severity, Severity::Clean);
    assert_eq!(result.items.len(), 0);

    let result = OBFUSCATED_INFO_STEALER_SCANNER.scan_for_ioc(contents.clone());
    assert_eq!(result.score, 0);
    assert_eq!(result.severity, Severity::Clean);
    assert_eq!(result.items.len(), 0);

    let result = KEYLOGGER_SCANNER.scan_for_ioc(contents.clone());
    assert_eq!(result.score, 0);
    assert_eq!(result.severity, Severity::Clean);
    assert_eq!(result.items.len(), 0);
}

#[test]
fn it_scans_keylogger_script() {
    let crate_root: PathBuf = env::current_dir().expect("Couldn't get cwd");
    let filename = crate_root.join("test_cases/4_keylogger.js");
    let contents = fs::read_to_string(&filename).unwrap_or_else(|e| {
        eprintln!("Error reading file {}: {}", filename.display(), e);
        std::process::exit(1);
    });

    let result = CODE_EXECUTION_SCANNER.scan_for_ioc(contents.clone());
    assert_eq!(result.score, 5);
    assert_eq!(result.severity, Severity::Info);
    assert_eq!(result.items.len(), 1);

    let result = OBFUSCATED_INFO_STEALER_SCANNER.scan_for_ioc(contents.clone());
    assert_eq!(result.score, 0);
    assert_eq!(result.severity, Severity::Clean);
    assert_eq!(result.items.len(), 0);

    let result = KEYLOGGER_SCANNER.scan_for_ioc(contents.clone());
    assert_eq!(result.score, 100);
    assert_eq!(result.severity, Severity::Critical);
    assert_eq!(result.items.len(), 3);
}
