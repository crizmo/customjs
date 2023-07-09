const SetLog = (variable) => {
    global[variable] = console.log;
};

module.exports.setlog = SetLog;
