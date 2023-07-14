# CustomJS

CustomJS is a simple npm package that allows you to customize JavaScript functions with additional features, such as logging with customizable colors.

## Installation

You can install CustomJS using npm:

```bash
npm install @kurizu/customjs
```

# Functions
1 - SetLog

The SetLog function allows you to customize logging behavior by assigning a logging function to a specified variable name. It also supports customizing the log level and color.

First, import the package and initialize it by calling the setlog function and passing a variable name and log level. This will assign the customized logging function to the specified variable:

```javascript
const custom = require('@kurizu/customjs');
custom.setlog('log', 'info');
```

Now you can use the assigned variable to `log` messages to the console with the specified log level:

```javascript
log('Hello World!');
```

You can have multiple instances of `setlog` running at the same time by calling the `setlog` function with different variable names:

```javascript
const custom = require('@kurizu/customjs');
custom.setlog('log', 'info');
custom.setlog('log2', 'warning');
```

You can also use the assigned variables to log messages to the console:

```javascript
log('Hello World!'); // Logs an info message in cyan color: Hello World!
log2('Hello World! 2'); // Logs a warning message in yellow color: Hello World 2!
```

2 - Calculate 
The calculate function basically lets you do operations strings.
    
```javascript   
const custom = require('@kurizu/customjs');
custom.calculate([1, '2'], '-')
```

The available operations are:
- `+` for addition
- `-` for subtraction
- `*` for multiplication
- `/` for division
- `%` for modulus
- `**` for exponentiation

You cause even use it with the `setlog` function to log the result of the calculation:

```javascript
const custom = require('@kurizu/customjs');
custom.setlog('log', 'info');
log(custom.calculate([1, '2', 3], '*')); // Logs an info message in cyan color: 6
```

And can pass the amount of numbers you want as array:

```javascript
const custom = require('@kurizu/customjs');
custom.setlog('log', 'info');
log(custom.calculate([1, '2', 3, "4", 5], '*')); // Logs an info message in cyan color: 120
```

## Available Log Levels and Colors

CustomJS supports the following log levels and their corresponding colors:

1. none: No color formatting applied
2. info: Cyan color
3. warning: Yellow color
4. error: Red color

You can customize the log level when calling setlog by providing the desired log level as the second argument. If an invalid log level is provided, an error message will be displayed.

# Features

CustomJS aims to provide customizable JavaScript functions for various purposes. In the future, I plan to add more features and functionalities to this package. If you have any suggestions, feel free to open an issue on the GitHub repository.

# License

This project is licensed under the MIT License. See the LICENSE file for more details.