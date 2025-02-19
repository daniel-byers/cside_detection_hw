mod detections;

use detections::Scanner;
use std::env;
use std::fs;

fn main() {
    let args: Vec<String> = env::args().collect();
    if args.len() < 2 {
        eprintln!("Usage: {} <filename>", args[0]);
        std::process::exit(1);
    }

    let filename = &args[1];
    let contents = fs::read_to_string(filename).unwrap_or_else(|e| {
        eprintln!("Error reading file {}: {}", filename, e);
        std::process::exit(1);
    });

    println!("Scanning {}", filename);
    let mut id = detections::code_execution::CodeExecution::default();
    id.scan_for_ioc(contents.clone());
    println!("Injection severity: {}", id.get_severity());
    let mut oisd = detections::obfuscated_info_stealer::ObfuscatedInfoStealer::default();
    oisd.scan_for_ioc(contents.clone());
    println!("Info Stealer severity: {}", oisd.get_severity());
    let mut k = detections::keylogger::Keylogger::default();
    k.scan_for_ioc(contents.clone());
    println!("Keylogger severity: {}", k.get_severity());
}
