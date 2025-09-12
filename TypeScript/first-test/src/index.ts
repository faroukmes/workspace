console.log("hello");
const a: boolean = true;
let b: any; // this allows you to write any type and it's dangerous
const c: (number | string)[] = [];
const d: {
    firstName: string;
    lastName: string;
    age: number;
} = {
    firstName: "farouk",
    lastName: "messaoudi",
    age: 20,
};
const e: Date = new Date("2005, 3, 18");
console.log(e);
const g: unknown = 10;
// exercice:

type Species = "mammal" | "fishes" | "insects" | "birds";

interface Animal {
    name: string;
    image?: string;
    specie: Species;
    lifespan: number;
}
const animal1: Animal = {
    name: "chiken",
    specie: "birds",
    lifespan: 5,
};
const animal2: Animal = {
    name: "sardine",
    specie: "fishes",
    lifespan: 1,
};
const animal3: Animal = {
    name: "cicada",
    specie: "insects",
    image: "https://t1.gstatic.com/licensed-image?q=tbn:ANd9GcTVGseEBKLItm3BVy-16y4-kjpP4ItmuXruhs_LnVzcnhd2scFBTGW4XeiS2p7-bvKZIKiAWkoQgE99yrx9",
    lifespan: 17,
};
const animal4: Animal = {
    name: "kanguru",
    specie: "mammal",
    lifespan: 6,
};
