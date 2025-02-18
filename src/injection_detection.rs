pub trait Scanner {
    fn scan_for_ioc(&mut self, input_file: String) -> bool;
}

#[derive(Default)]
pub struct InjectionDetection {
    pub severity: u64,
    pub enabled: bool
}

impl Scanner for InjectionDetection {
    fn scan_for_ioc(&mut self, input_file: String) -> bool {
        return true;
    }
}
