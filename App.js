var Projects = require("./Projects.js");
var Entity = require("./Entity.js");
var Work = require("./Work.js");

(function() {
	console.log('begin');

	var stanley = new Entity("Stanley");


	var workDone = false;
	while (!workDone) {
		workDone = Work.DoWork(stanley, new Entity("Project1"));
	}
	console.log('project1 done\r\n');
	
	workDone = false;
	while (!workDone) {
		workDone = Work.DoWork(stanley, new Entity("Project2"));
	}
	console.log('project2 done\r\n');

	console.log('done');
})();
