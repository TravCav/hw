var Projects = require("./Projects.js");
var Entity = require("./Entity.js");
var Work = require("./Work.js");

(function () {
	console.log('begin');

	var stanley = new Entity("Stanley");

	var workDone = false;
	while (!workDone) {
		workDone = Work.DoWork(stanley, Projects.TTOps);
	}


	console.log('done');
})();
