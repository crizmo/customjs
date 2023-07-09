const custom = require('../src/custom.js');
const { setlog } = require('../src/custom.js');

custom.setlog('test');
test('test');

custom.setlog('test2');
test2('test 2');

// Set up logging with customizations
setlog('hi', 'warning'); // Enable logging with 'warning' level using the variable name 'hi'

// Test the logger
hi('This is a warning message.', 'yellow'); // Logs the message with yellow color

// Enable logging with custom logging function and color
setlog('hi2222', 'info'); // Enable logging with 'info' level and custom logging function

// Test the logger with the custom function and color
hi2222('This is an info message.', 'cyan'); // Logs the message with cyan color

// Set up logging with customizations
setlog('hi', 'error'); // Enable logging with 'error' level using the variable name 'hi'

// Test the logger
hi('This is an error message.', 'red'); // Logs the message with red color