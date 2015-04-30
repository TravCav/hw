var Skill = require("./Skill.js");

var Entity = function(data) {
     var self = this;
     self.stamina = 1;
     self.energy = 1;
     self.skills = [Skill.basicSkill];
     self.smarts = 1;
     self.speed = 1;
     self.regen = 1;
   
     if (data != null) {
         self.stamina = data.stamina;
         self.energy = data.energy;
     }
 };
 
 module.exports = Entity;
 