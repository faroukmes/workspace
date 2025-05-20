const pet = {
    name: "fluffy",
    type: "cat",
    hungerLevel: 7,
    feed() {
        this.hungerLevel = this.hungerLevel - 1;
    },
};
console.log(pet);
pet.feed();
console.log(pet);

//exercice2:
const shoppingList = {
    items: [],
    additem(itemName, quantity) {
        const newItem = { Name: itemName, quantity: quantity };
        this.items.push(newItem);
    },
    printlist() {
        console.log(this.items);
    },
};

shoppingList.printlist();
shoppingList.additem("soda", 2);
shoppingList.printlist();

//exercice3:
