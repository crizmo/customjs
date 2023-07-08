const SetupInit = (variable) => {
    global[variable] = console.log;
};

module.exports.init = SetupInit;
