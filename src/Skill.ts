// export function Skill(data) {
// 	var self = this;
// 	self.name = '';
// 	self.staminaDrain = 1;
// 	self.energyDrain = 1;
// 	self.time = 1;
// 	self.output = 1;

// 	if (data != null) {
// 		self.name = data.name;
// 		self.staminaDrain = data.staminaDrain;
// 		self.energyDrain = data.energyDrain;
// 		self.time = data.time;
// 		self.output = data.output;
// 	}
// }

export interface ISkill {
    name: string;
    staminaDrain: number;
    energyDrain: number;
    time: number;
    output: number;
}

export const basicSkill: ISkill = {
    energyDrain: 1,
    name: "basic skill",
    output: 1,
    staminaDrain: 1,
    time: 1,
};
