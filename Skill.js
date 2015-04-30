var Skill = function(data){
	var self = this;
	self.name = '';
	self.staminaDrain = 1;
	self.energyDrain = 1;
	self.time = 1;
	self.output = 1;
	
	if (data != null){
		self.name = data.name;
		self.staminaDrain = data.staminaDrain;
		self.energyDrain = data.energyDrain;
		self.time = data.time;
		self.output = data.output;
	}
}

module.exports = Skill;
module.exports.basicSkill = new Skill({
    name: 'Basic Skill',
    staminaDrain: 1,
    energyDrain: 1,
    time: 1,
    output: 1
});