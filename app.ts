class Player {
    name: string;
    type: string;
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }

    introduce = () => {
        console.log(`Hi, my name is ${this.name}, i'm a software engineer from ${this.type}`)
    }
}

class Student extends Player {
    constructor(name, type){
        super(name, type)
    }
    talk =  () => {
        console.log(`I am done with my task at ${this.type}`)
    }
}


let guy = new Student('femi', 'decagon');
let result = guy.talk
console.log(result);