var Projects = require("./Projects.js");
var Entity = require("./Entity.js");
var Work = require("./Work.js");

(function () {
	console.log('begin');

	var stanley = new Entity("Stanley");

	Work.Do(stanley,Projects.TTOps );		
		
	console.log('done');
})();
