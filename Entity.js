var Skill = require("./Skill.js");

var Entity = function (initName) {
     var self = this;
     self.name = initName;
     self.stamina = 1;
     self.energy = 5;
     self.skills = [Skill.basicSkill];
     self.smarts = 1;
     self.speed = 1;
     self.regen = 1;

     self.SetParameters = function (data) {
          self.name = data.name;
          self.stamina = data.stamina;
          self.energy = data.energy;
     };
     
     self.Work = function(){
       var topSkill = self.skills[self.skills.length-1];
       console.log("--" + self.name + ' uses ' + topSkill.name);
       return topSkill.output;
     };
     
     self.Status = function(){
       console.log("---" + self.name + "'s energy: " + self.energy );
     };
};

module.exports = Entity;
 