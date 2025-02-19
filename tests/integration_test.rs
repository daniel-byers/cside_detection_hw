use cside_detection_hw::detections;
use cside_detection_hw::detections::Scanner;
use std::fs;
use std::env;
use std::path::PathBuf;

#[test]
fn it_scans_eval_script() {
    let crate_root: PathBuf = env::current_dir().expect("Couldn't get cwd");
    let filename = crate_root.join("test_cases/1_eval.js");
    let contents = fs::read_to_string(&filename).unwrap_or_else(|e| {
        eprintln!("Error reading file {}: {}", filename.display(), e);
        std::process::exit(1);
    });

    let mut id = detections::code_execution::CodeExecution::default();
    id.scan_for_ioc(contents.clone());
    assert_eq!(id.get_severity(), 100);

    let mut oisd = detections::obfuscated_info_stealer::ObfuscatedInfoStealer::default();
    oisd.scan_for_ioc(contents.clone());
    assert_eq!(oisd.get_severity(), 0);

    let mut k = detections::keylogger::Keylogger::default();
    k.scan_for_ioc(contents.clone());
    assert_eq!(k.get_severity(), 0);
}

#[test]
fn it_scans_obfuscated_info_stealer_script() {
    let crate_root: PathBuf = env::current_dir().expect("Couldn't get cwd");
    let filename = crate_root.join("test_cases/2_obfuscated.js");
    let contents = fs::read_to_string(&filename).unwrap_or_else(|e| {
        eprintln!("Error reading file {}: {}", filename.display(), e);
        std::process::exit(1);
    });

    let mut id = detections::code_execution::CodeExecution::default();
    id.scan_for_ioc(contents.clone());
    assert_eq!(id.get_severity(), 0);

    let mut oisd = detections::obfuscated_info_stealer::ObfuscatedInfoStealer::default();
    oisd.scan_for_ioc(contents.clone());
    assert_eq!(oisd.get_severity(), 100);

    let mut k = detections::keylogger::Keylogger::default();
    k.scan_for_ioc(contents.clone());
    assert_eq!(k.get_severity(), 0);
}
#[test]

fn it_scans_clean_script() {
    let crate_root: PathBuf = env::current_dir().expect("Couldn't get cwd");
    let filename = crate_root.join("test_cases/3_clean.js");
    let contents = fs::read_to_string(&filename).unwrap_or_else(|e| {
        eprintln!("Error reading file {}: {}", filename.display(), e);
        std::process::exit(1);
    });

    let mut id = detections::code_execution::CodeExecution::default();
    id.scan_for_ioc(contents.clone());
    assert_eq!(id.get_severity(), 0);

    let mut oisd = detections::obfuscated_info_stealer::ObfuscatedInfoStealer::default();
    oisd.scan_for_ioc(contents.clone());
    assert_eq!(oisd.get_severity(), 0);

    let mut k = detections::keylogger::Keylogger::default();
    k.scan_for_ioc(contents.clone());
    assert_eq!(k.get_severity(), 0);
}

#[test]
fn it_scans_keylogger_script() {
    let crate_root: PathBuf = env::current_dir().expect("Couldn't get cwd");
    let filename = crate_root.join("test_cases/4_keylogger.js");
    let contents = fs::read_to_string(&filename).unwrap_or_else(|e| {
        eprintln!("Error reading file {}: {}", filename.display(), e);
        std::process::exit(1);
    });

    let mut id = detections::code_execution::CodeExecution::default();
    id.scan_for_ioc(contents.clone());
    assert_eq!(id.get_severity(), 0);

    let mut oisd = detections::obfuscated_info_stealer::ObfuscatedInfoStealer::default();
    oisd.scan_for_ioc(contents.clone());
    assert_eq!(oisd.get_severity(), 0);

    let mut k = detections::keylogger::Keylogger::default();
    k.scan_for_ioc(contents.clone());
    assert_eq!(k.get_severity(), 100);
}
