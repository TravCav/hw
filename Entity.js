var Skill = require("./Skill.js");

var Entity = function (initName) {
     var self = this;
     self.name = initName;
     self.stamina = 1;
     self.energy = 1;
     self.skills = [Skill.basicSkill];
     self.smarts = 1;
     self.speed = 1;
     self.regen = 1;

     self.SetParameters = function (data) {
          self.name = data.name;
          self.stamina = data.stamina;
          self.energy = data.energy;
     }
};

module.exports = Entity;
 