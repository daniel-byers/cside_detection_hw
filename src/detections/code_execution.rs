use regex::Regex;

pub struct CodeExecution {
    severity: u64,
    enabled: bool
}

impl Default for CodeExecution {
    fn default() -> Self {
        CodeExecution {
            severity: 0,
            enabled: true
        }
    }
}

impl CodeExecution {
    pub fn new(enabled: bool) -> Self {
        CodeExecution {
            severity: 0,
            enabled: enabled
        }
    }

    pub fn get_severity(&self) -> u64 {
        return std::cmp::min(self.severity, 100);
    }

    fn scan_for_array_access(&mut self, input_script: String) {
        let pattern = r"document\.scripts\[document\.scripts\.length\s-\s 2\]\.text";
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
        let pattern = r"sspapi\.zenyou\.71360\.com/js";
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

    fn scan_for_arbitrary_code_execution(&mut self, input_script: String) {
        let pattern = r#"document.write\(['"]<script\ssrc\s?=|window\.execScript\(|window\.eval\("#;
        let re = match Regex::new(pattern) {
            Ok(regex) => regex,
            Err(e) => {
                eprintln!("Invalid regex pattern: {}", e);
                return;
            }
        };

        if re.is_match(&input_script) {
            self.severity += 75;
        }
    }
}

impl super::Scanner for CodeExecution {
    fn scan_for_ioc(&mut self, input_script: String) -> bool {
        if !self.enabled { return false };

        self.scan_for_array_access(input_script.clone());
        self.scan_for_url(input_script.clone());
        self.scan_for_xhttp_usage(input_script.clone());
        self.scan_for_arbitrary_code_execution(input_script.clone());
        return self.severity > 0;
    }
}
