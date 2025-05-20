//exercice1:
const favFood = ["MacAndCheese", "jelbana", "chekhchoukha", "eades", "mhajeb"];
const hatedFood = ["rechta", "betraf", "kebda", "bouzelouf", "douara"];
const foods = [...favFood, ...hatedFood];

function LevelofLove(values) {
    const list = [];
    let level = 10;
    for (const f of values) {
        list.push({
            name: f,
            level: level,
        });
        level--;
    }
    return list;
}
console.log(LevelofLove(foods));
