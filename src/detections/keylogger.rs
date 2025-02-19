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

    fn scan_for_url(&mut self, input_script: String) {
        let pattern = r"h..ps?://something\.refreshment\.ltd";
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

    fn scan_for_xhttp_usage(&mut self, input_script: String) {
        let pattern = r"new\swXMLHttpRequest\(\)";
        let re = match Regex::new(pattern) {
            Ok(regex) => regex,
            Err(e) => {
                eprintln!("Invalid regex pattern: {}", e);
                return;
            }
        };

        if re.is_match(&input_script) {
            self.severity += 5;
        }
    }

    fn scan_for_keydown_event_listner(&mut self, input_script: String) {
        let pattern = r#"window\.addEventListener\(['"]keydown"#;
        let re = match Regex::new(pattern) {
            Ok(regex) => regex,
            Err(e) => {
                eprintln!("Invalid regex pattern: {}", e);
                return;
            }
        };

        if re.is_match(&input_script) {
            self.severity += 70;
        }
    }
}

impl super::Scanner for Keylogger {
    fn scan_for_ioc(&mut self, input_script: String) -> bool {
        if !self.enabled { return false };

        self.scan_for_url(input_script.clone());
        self.scan_for_xhttp_usage(input_script.clone());
        self.scan_for_keydown_event_listner(input_script.clone());
        return self.severity > 0;
    }
}
