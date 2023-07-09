const Set = (variable) => {
    global[variable] = console.log;
};

module.exports.set = Set;
