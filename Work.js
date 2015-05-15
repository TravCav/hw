var DoWork = function (entity1, entity2) {
    console.log("-" + entity1.name + " vs " + entity2.name);
    
	entity2.energy -= entity1.Work();

    entity1.Status();
    entity2.Status();
    
    return entity1.energy < 1 || entity2.energy < 1;		
};

module.exports.DoWork = DoWork;