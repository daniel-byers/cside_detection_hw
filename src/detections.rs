pub mod code_execution;
pub mod obfuscated_info_stealer;

pub trait Scanner {
    fn scan_for_ioc(&mut self, input_script: String) -> bool;
}
