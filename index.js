//class
class Animal {
    //name och legs är parametrar som skickar in när skapas instans
    constructor(name, legs) {
        this.name = name
        this.legs = legs
    }
    speech() {
            return `${this.name} makes a noise`
        }
        //method är functioner som tillhör en class
    numberOfLegs() {
        return `This animal has ${this.legs} legs`
    }
}

const dog = new Animal("dog", 4) //dog är klass instans
console.log(dog.speech())
console.log(dog.numberOfLegs())

const cat = new Animal("cat", 4)
console.log(cat.speech())
console.log(cat.numberOfLegs())

const spider = new Animal("spider", 8)