class Ninja{
    constructor(name,helth)
    {
        this.name=name;
        this.helth=helth;
        this.speed=3;
        this.strength=10;
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
class Sensei extends Ninja{
    constructor(name,strength){
        super(name,strength);
        this.helth=200;
        this.speed=10;
        this.wisdom=10;
       
    }
    speakWisdom(){
        console.log(this.drinkSake());
    }
}
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
superSensei.showStats();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"