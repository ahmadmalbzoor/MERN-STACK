class Ninja{
    constructor(name,helth)
    {
        this.name=name;
        this.helth=helth;
        this.speed=3;
        this.strength=3;
    }
    sayName(){
        console.log(`The Ninja name is ${this.name}`);
    } 
    showStats() {
        console.log(`the ninja name is ${this.name} and the speed is ${this.speed} and the strength is ${this.strength} and the health is ${this.helth}`)
    }
    drinkSake(){
        this.helth+=10;
    }
}
const ninja1 = new Ninja("Hyabusa",0);
ninja1.drinkSake();
ninja1.sayName();
ninja1.showStats();