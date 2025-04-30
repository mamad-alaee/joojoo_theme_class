


class animal{
    constructor(name, age , height){
        this.name = name;
        this.age = age;
        this.height = height;
    }
    speak(){
        console.log("I am an animal");
    }
    eat(){
        console.log("I am eating");
    }
    sleep(){
        console.log("I am sleeping");
    }
}

class dog extends animal{
    constructor(name, age, height, breed){
        super(name, age, height);
        this.breed = breed;
    }

    bark(){
        console.log("Woof!");
    }
}

const myDog = new dog("Buddy", 3, 50, "Labrador");
myDog.speak();