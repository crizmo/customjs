# Setlog

Setlog is a simple npm package that allows you to assign `console.log` functionality to a variable of your choice. Once set up, you can use the assigned variable to log messages to the console.

Idk why you would want to do this, but I made it anyway.
Like why would you want to use this but whatever.

## Installation

You can install Setlog using npm:

```bash
npm install setlog
```

# Usage

First, import the package and initialize it by calling the init function and passing a variable name. This will assign console.log to the specified variable:
    
```js 
const setlog = require('setlog');
setlog.init('log');
```

Now you can use the assigned variable, to log messages to the console:
    
```js   
log('Hello World!'); // Hello World!
```

You can have multiple instances of Setlog running at the same time by calling the init function with different variable names:
    
```js
const setlog = require('setlog');
setlog.init('log');
setlog.init('log2');
```

You can also use the `setlog` variable to log messages to the console:
    
```js
log('Hello World!'); // Hello World!
log2('Hello World! 2'); // Hello World 2!
```

# License

This project is licensed under the MIT License. See the LICENSE file for more details.