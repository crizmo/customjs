const customLogger = (message, color = 'white') => {
    const colors = {
        black: '\x1b[30m',
        red: '\x1b[31m',
        green: '\x1b[32m',
        yellow: '\x1b[33m',
        blue: '\x1b[34m',
        magenta: '\x1b[35m',
        cyan: '\x1b[36m',
        white: '\x1b[37m',
    };

    const reset = '\x1b[0m';

    if (colors.hasOwnProperty(color)) {
        console.log(`${colors[color]}${message}${reset}`);
    } else {
        console.error(`Invalid color: ${color}`);
    }
};

const logLevels = {
    none: 'white',
    info: 'cyan',
    warning: 'yellow',
    error: 'red',
};

const SetLog = (variable, logLevel = 'none') => {
    if (logLevels.hasOwnProperty(logLevel)) {
        global[variable] = (message, color = logLevels[logLevel]) => customLogger(message, color);
    } else {
        console.error(`Invalid log level: ${logLevel}`);
    }
};

const Calculate = (operands, operator) => {
    const numbers = operands.map((operand) => {
        if (typeof operand === 'string') {
            return Number(operand);
        }
        return operand;
    });

    if (numbers.every((num) => typeof num === 'number')) {
        let result;
        switch (operator) {
            case '+':
                result = numbers.reduce((a, b) => a + b, 0);
                break;
            case '-':
                result = numbers.reduce((a, b) => a - b);
                break;
            case '/':
                result = numbers.reduce((a, b) => a / b);
                break;
            case '*':
                result = numbers.reduce((a, b) => a * b, 1);
                break;
            case '%':
                result = numbers.reduce((a, b) => a % b);
                break;
            case '**':
                result = numbers.reduce((a, b) => a ** b);
                break;
            default:
                result = 0;
        }
        return result;
    } else {
        return 0;
    }
};

module.exports.setlog = SetLog;
module.exports.calculate = Calculate;