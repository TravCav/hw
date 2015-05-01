var entity1, entity2;

var Do = function (entity1, entity2) {
    this.entity1 = entity1;
    this.entity2 = entity2;

    console.log(this.entity1.name + " vs " + this.entity2.name);
    CheckProgress();

};

function CheckProgress() {
    var loser = 'na';

    if (this.entity1.energy < 1) { loser = this.entity1.name; }
    if (this.entity2.energy < 1) { loser = this.entity2.name; }
    return loser;
}

module.exports.Do = Do;


