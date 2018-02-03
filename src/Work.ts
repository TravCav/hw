import { Entity } from "./Entity";

export function DoWork(entity1: Entity, entity2: Entity) {
    console.log("-" + entity1.name + " vs " + entity2.name);

    Work(entity1, entity2);
    Work(entity2, entity1);

    let workDone = entity1.energy < 1 || entity2.energy < 1;

    return workDone;
};

export function Work(entity1: Entity, entity2: Entity) {
    let output = 0;

    if (entity1.energy > 0) {
        let topSkill = entity1.skills[entity1.skills.length - 1];
        console.log("--" + entity1.name + " uses " + topSkill.name);

        output = topSkill.output;
    }

    entity2.SetEnergy(entity2.energy - output);
}

