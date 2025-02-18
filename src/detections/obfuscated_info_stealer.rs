use regex::Regex;

pub struct ObfuscatedInfoStealer {
    severity: u64,
    enabled: bool
}

impl Default for ObfuscatedInfoStealer {
    fn default() -> Self {
        ObfuscatedInfoStealer {
            severity: 0,
            enabled: true
        }
    }
}

impl ObfuscatedInfoStealer {
    pub fn new(enabled: bool) -> Self {
        ObfuscatedInfoStealer {
            severity: 0,
            enabled: enabled
        }
    }

    pub fn get_severity(&self) -> u64 {
        return std::cmp::min(self.severity, 100);
    }

    fn scan_for_string_identifiers(&mut self, input_script: String) {
        let pattern = r"bmmuw|vnskp_param|vnskp_type";
        let re = match Regex::new(pattern) {
            Ok(regex) => regex,
            Err(e) => {
                eprintln!("Invalid regex pattern: {}", e);
                return;
            }
        };

        if re.is_match(&input_script) {
            self.severity += 40;
        }
    }

    fn scan_for_url(&mut self, input_script: String) {
        let pattern = r"aHR0cHM6Ly9jZG4tcmVwb3J0LmNvbS9zdGF0dXMv|h..ps://cdn-report\.com/status";
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

    fn scan_for_base64_encoded_array(&mut self, input_script: String) {
        // One of the ids that this script is searching for base64 encoded should be enough
        // to match on. Legitimate operations wouldn't need to obfuscate this.
        let pattern = r"aW5wdXQtcGF5bWVudC1maXJzdG5hbWU|JpbnB1dC1wYXltZW50LWxhc3RuYW1lI|\
                        aW5wdXQtZmlyc3RuYW1l|aW5wdXQtbGFzdG5hbWU|mlucHV0LWNjLW93bmVyI|\
                        aW5wdXQtY2MtbnVtYmVy|aW5wdXQtY2MtZXhwaXJlLWRhdGU|\
                        JjY19leHBpcmVfZGF0ZV95ZWFy|mlucHV0LWNjLWN2djI";
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

    fn scan_for_customer_data_usage(&mut self, input_script: String) {
        let pattern = r"customerData != undefined";
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

}

impl super::Scanner for ObfuscatedInfoStealer {
    fn scan_for_ioc(&mut self, input_script: String) -> bool {
        if !self.enabled { return false };

        self.scan_for_string_identifiers(input_script.clone());
        self.scan_for_url(input_script.clone());
        self.scan_for_base64_encoded_array(input_script.clone());
        self.scan_for_customer_data_usage(input_script.clone());
        return self.severity > 0;
    }
}
