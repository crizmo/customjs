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

module.exports.setlog = SetLog;
