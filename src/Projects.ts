let Entity = require("./Entity.js");

let TTOps = new Entity("TTOps");
let EDUse = new Entity("EDUse");

let Projects = [TTOps, EDUse];

module.exports.Projects = Projects;
module.exports.TTOps = TTOps;
module.exports.EDUse = EDUse;
