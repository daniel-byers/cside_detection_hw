use cside_detection_hw::detections;
use detections::SCANNERS;
use detections::Severity;
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

    for (_i, scanner) in SCANNERS.iter().enumerate() {
        let result = scanner.scan_for_ioc(contents.clone());
        println!("{}: {}\nThe following scans detected interesting artifacts:",
                 scanner.name,
                 result.score);
        if result.severity != Severity::Clean {
            for (i, item) in result.items.iter().enumerate() {
                println!("[{}] {} (severity score: {})\n  {}",
                         i,
                         item.name,
                         item.score,
                         item.detection_guidance);
            }
        }
    }
}
