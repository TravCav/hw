export interface ISkill {
  name: string;
  staminaDrain: number;
  energyDrain: number;
  time: number;
  output: number;
}

export class Skill implements ISkill {
  public name: string;
  public staminaDrain: number;
  public energyDrain: number;
  public time: number;
  public output: number;
  constructor(
    name: string,
    staminaDrain: number,
    energyDrain: number,
    time: number,
    output: number
  ) {
    this.name = name;
    this.staminaDrain = staminaDrain;
    this.energyDrain = energyDrain;
    this.time = time;
    this.output = output;
  }
}

interface IAnimal {
  name: string;
  age: number;
}

// tslint:disable-next-line:max-classes-per-file
class Animal implements IAnimal {
  constructor(public name: string, public age: number) {
    /* constructor */
  }
}

export const basicSkill: ISkill = {
  energyDrain: 1,
  name: "basic skill",
  output: 1,
  staminaDrain: 1,
  time: 1
};

const skillz: ISkill[] = [];

const skill1: ISkill = {
  energyDrain: 1,
  name: "skill1",
  output: 1,
  staminaDrain: 1,
  time: 1
};
skillz.push(skill1);

const skill2: ISkill = new Skill("skill2", 2, 2, 2, 2);
skillz.push(skill2);

const skill3: Skill = {
  energyDrain: 3,
  name: "skill3",
  output: 3,
  staminaDrain: 3,
  time: 3
};
skillz.push(skill3);

const skill4: Skill = new Skill("skill4", 4, 4, 4, 4);
skillz.push(skill4);

const ability1: ISkill = new Skill("ability1", 4, 4, 4, 4);
skillz.push(ability1);

for (const skill of skillz) {
  console.log(skill);
  console.log(typeof (skill as Skill));
  console.log((skill as Skill) instanceof Skill);
  console.log("");
}
