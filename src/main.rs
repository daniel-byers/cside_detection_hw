mod injection_detection;
use crate::injection_detection::Scanner;
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

    let mut id = injection_detection::InjectionDetection::default();
    id.scan_for_ioc(contents);
    println!("{}", id.get_severity());
}
