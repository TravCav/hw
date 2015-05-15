var Projects = require("./Projects.js");
var Entity = require("./Entity.js");
var Work = require("./Work.js");

(function () {
	console.log('begin');

	var stanley = new Entity("Stanley");
	
	var workDone = Work.DoWork(stanley,Projects.TTOps );
	console.log("-Work done: " + workDone);
			
	console.log('done');
})();
