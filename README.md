# Custom

Custom is a simple npm package that allows you to customize certain JavaScript functions.

## Installation

You can install custom using npm:

```bash
npm install @kurizu/custom
```

# Functions

1. SetLog <br>

First, import the package and initialize it by calling the set function and passing a variable name. This will assign console.log to the specified variable:
    
```js 
const custom = require('@kurizu/custom');
custom.setlog('log');
```

Now you can use the assigned variable, to log messages to the console:
    
```js   
log('Hello World!'); // Hello World!
```

You can have multiple instances of setlog running at the same time by calling the set function with different variable names:
    
```js
const custom = require('@kurizu/custom');
custom.setlog('log');
custom.setlog('log2');
```

You can also use the `custom` variable to log messages to the console:
    
```js
log('Hello World!'); // Hello World!
log2('Hello World! 2'); // Hello World 2!
```

# Features
I plan on adding more features to this package in the future. If you have any suggestions, feel free to open an issue.


# License
This project is licensed under the MIT License. See the LICENSE file for more details.