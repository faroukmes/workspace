class animal {
    name;
    type;
    hungerlevel = 10;
    constructor(name, type) {
        this.type = type;
        this.name = name;
    }
    feed() {
        this.hungerlevel--;
    }
}

const animal1 = new animal("kitty", "cat");
const animal2 = new animal("doggy", "dog");
console.log(animal1, animal2);
animal1.feed();
console.log(animal1, animal2);
