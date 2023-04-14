// findMatching- This function takes an array of drivers' names and a string as arguments, and returns the matching list of drivers. 
// The function should be case insensitive.

function findMatching(drivers, name) {
    const driverName = drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
    return driverName;
};
findMatching(["Harry", "Joe", "Steve"], "joe");

function fuzzyMatch(drivers, name) {
    const driverName = drivers.filter(driver => driver.slice(0, name.length) === name);
    return driverName;
};
fuzzyMatch(["Harry", "Joe", "Steve"], "Jo");

function matchName(drivers, key) {
    const driverName = drivers.filter(driver => driver.name === key);
    return driverName;
};
matchName();