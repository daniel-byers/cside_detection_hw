// use regex::Regex;

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
}

impl super::Scanner for ObfuscatedInfoStealer {
    fn scan_for_ioc(&mut self, input_script: String) -> bool {
        if !self.enabled { return false };

        return self.severity > 0;
    }
}
