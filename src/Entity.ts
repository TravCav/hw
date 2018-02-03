import { basicSkill, ISkill } from "./Skill";

export class Entity {
    public name: string = "";
    public stamina = 1;
    public energy = 5;
    public skills: ISkill[] = [basicSkill];
    public smarts: number = 1;
    public speed: number = 1;
    public regen: number = 1;

    constructor(initName: string) {
        this.name = initName;
    }

    SetParameters(data: any) {
        this.name = data.name;
        this.stamina = data.stamina;
        this.energy = data.energy;
    }

    SetEnergy(newEnergy: number) {
        this.energy = newEnergy;
        this.Status();
        if (this.energy < 1) {
            console.log(this.name + " has finished...");
        }
    };

    Status() {
        console.log("---" + this.name + "'s energy: " + this.energy);
    }
}
