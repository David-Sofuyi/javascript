from unittest import TestCase
import mode_checker
    
class TestForModeValueInAnArray(TestCase):
    def test_that_function_exists(self):
        mode_checker.mode_counter([1,2,2,2,3])
        
    def test_that_function_checks_for_mode_value(self):
    actual = mode_checker.mode_counter([1,2,2,2,3])
    expected = 3
    self.assertEqual(actual, expected)
