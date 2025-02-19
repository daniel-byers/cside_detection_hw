use regex::Regex;

pub struct Keylogger {
    severity: u64,
    enabled: bool
}

impl Default for Keylogger {
    fn default() -> Self {
        Keylogger {
            severity: 0,
            enabled: true
        }
    }
}

impl Keylogger {
    pub fn new(enabled: bool) -> Self {
        Keylogger {
            severity: 0,
            enabled: enabled
        }
    }

    pub fn get_severity(&self) -> u64 {
        return std::cmp::min(self.severity, 100);
    }

    fn scan_for_(&mut self, input_script: String) {
        let pattern = r"";
        let re = match Regex::new(pattern) {
            Ok(regex) => regex,
            Err(e) => {
                eprintln!("Invalid regex pattern: {}", e);
                return;
            }
        };

        if re.is_match(&input_script) {
            self.severity += 0;
        }
    }
}

impl super::Scanner for Keylogger {
    fn scan_for_ioc(&mut self, input_script: String) -> bool {
        if !self.enabled { return false };

        self.scan_for_(input_script.clone());
        return self.severity > 0;
    }
}
