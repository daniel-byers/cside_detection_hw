use regex::Regex;

pub trait Scanner {
    fn scan_for_ioc(&mut self, input_script: String) -> bool;
}

#[derive(Default)]
pub struct InjectionDetection {
    pub severity: u64,
    pub enabled: bool
}

impl InjectionDetection {
    fn scan_for_array_access(&mut self, input_script: String) {
        let pattern = r"document\.scripts\[document\.scripts\.length - 2\]\.text";
        let re = match Regex::new(pattern) {
            Ok(regex) => regex,
            Err(e) => {
                eprintln!("Invalid regex pattern: {}", e);
                return;
            }
        };

        if re.is_match(&input_script) {
            self.severity += 10;
        }
    }

    fn scan_for_url(&mut self, input_script: String) {
        let pattern = r"sspapi.zenyou.71360.com/js";
        let re = match Regex::new(pattern) {
            Ok(regex) => regex,
            Err(e) => {
                eprintln!("Invalid regex pattern: {}", e);
                return;
            }
        };

        if re.is_match(&input_script) {
            self.severity += 50;
        }
    }
}

impl Scanner for InjectionDetection {
    fn scan_for_ioc(&mut self, input_script: String) -> bool {
        if !self.enabled { return false };

        self.scan_for_array_access(input_script.clone());
        self.scan_for_url(input_script.clone());
        return self.severity > 0;
    }
}
