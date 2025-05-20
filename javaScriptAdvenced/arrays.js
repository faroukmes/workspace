// add and remove
const mysongs = ["shape of you", "blinding lights", "levitating"];
console.log(mysongs);

mysongs.push("timeless");
console.log(mysongs);

const ls = mysongs.pop();
console.log(mysongs, ls);

mysongs.unshift("sao paolo");
console.log(mysongs);

const bs = mysongs.shift();
console.log(mysongs, bs);

// exercice2
const games = ["zelda", "minecraft", "Call of duty", "fortnite"];
console.log(games);
const didFind = games.includes("pubg");

if (didFind) {
    console.log("minecraft is in the list");
} else {
    console.log("minecraft isn't in the list");
}

console.log(games.indexOf("fortnite"));

games.splice(2, 1, "GTA V");
console.log(games);

games.splice(2, 0, "among us");
console.log(games);

const itinerary1 = ["Alabasta", "water 7", "red line"];
const itinerary2 = ["fishman island", "dressrosa"];
const combined = itinerary1.concat(itinerary2);
console.log(combined);

const sliced = combined.slice(0, 2);
console.log(sliced);

combined.reverse();
console.log(combined);

const sorted = combined.sort();
console.log(sorted);
