var DoWork = function (entity1, entity2) {
     console.log("-" + entity1.name + " vs " + entity2.name);

     Work(entity1,entity2);
     Work(entity2,entity1);

     ////entity1.Status();
     ////entity2.Status();

     var workDone = entity1.energy < 1 || entity2.energy < 1;
     ////console.log("-Work done: " + workDone + "\r\n");

     return workDone;
};

var Work = function (entity1, entity2) {
     var output = 0;

     if (entity1.energy > 0) {
          var topSkill = entity1.skills[entity1.skills.length - 1];
          console.log("--" + entity1.name + ' uses ' + topSkill.name);

          output = topSkill.output;
     }

     entity2.SetEnergy(entity2.energy - output);
};

module.exports.DoWork = DoWork;