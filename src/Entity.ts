import { basicSkill, ISkill } from "./Skill";

export function Entity(initName: string) {
    let name: string = initName;
    let stamina = 1;
    let energy = 5;
    let skills: ISkill[] = [basicSkill];
    let smarts: number = 1;
    let speed: number = 1;
    let regen: number = 1;

    function SetParameters(data: any) {
        name = data.name;
        stamina = data.stamina;
        energy = data.energy;
    }

    function SetEnergy(newEnergy: number) {
        self.energy = newEnergy;
        self.Status();
        if (self.energy < 1) {
            console.log(self.name + " has finished...");
        }
    };

    function Status() {
        console.log("---" + self.name + "'s energy: " + self.energy);
    }
}
