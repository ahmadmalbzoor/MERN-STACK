class Card{
    constructor(name,cost)
    {
        this.name=name;
        this.cost=cost;
    }

}
class Unit extends Card{
    constructor(name,cost,power,res)
    {
        super(name,cost);
        this.power=power;
        this.res=res;
    }

    attack(target){
        if (target instanceof effect) {
            console.log(`${this.name} attacked ${target.name} for ${this.power}pts of damage!`);
            target.res -= this.power;
        } else {
            throw new Error("Target must be a unit!");
        }
    }
   // attack= (target)=>{target instanceof Unit ?target.res-=this.power:new Error( "Target must be a unit!" )()};
}
class effect extends Card{
    constructor(name,cost,text, stat, magnitude)
    {
        super(name,cost);
        this.text=text;
        this.stat=stat;
        this.magnitude=magnitude;
    }
    play=(target)=>{target instanceof Unit ?(this.stat == "power" ?target.power += this.magnitude : target.res += this.magnitude) :new Error( "Target must be a unit!" )()};
}

const RedBeltNinja=new Unit("Red Belt Ninja", 3, 3, 4);
const BlackBeltNinja=new Unit("Black Belt Ninja",4,5,4)
const HardAlgorithm = new effect("Hard Algorithm", 2, "Increase the target's res by 2.", "res", 3);
const UnhandledPromiseRejection = new effect("Unhandled Promise Rejection", 1, "Increase the target's res by 1.", "res", 3);
const PairProgramming = new effect("Pair Programming", 3, "Increase the target's power by 3.", "power", 3);
HardAlgorithm.play(RedBeltNinja);
BlackBeltNinja.attack(PairProgramming);
console.log(RedBeltNinja);
console.log(BlackBeltNinja);