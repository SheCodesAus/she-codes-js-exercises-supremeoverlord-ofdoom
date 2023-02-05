// alert("Hello, world!");

// need to use back tick `` when injecting variables
let username = "Draco Malfoy";
console.log(`Hello, ${username}`);

let num1 = 3;
let num2 = 2;
let total = num1 + num2;
console.log(total);

function example() {
    console.log(`Hello ${username} from your function`);
}

example();

function add() {
    let x = 5;
    let y = 3;
    let result = x + y;
    console.log(result);
}

add();

function addagain(x, y) {
    let result = x + y;
    console.log(result);
}

addagain(3, 50);
addagain(300000, 10000000);
addagain(2, 2);


function showName() {
    let username = document.getElementById("name-text").value;
    console.log(`Hi, ${username}`);
}

//loops and arrays

for (let count = 0; count < 10; count ++) {
    console.log(count);
}

let pets = ["Chilli", "Rex", "Roary", "Fleur"];
console.log(pets);
pets.push("Ivy"); //what does this mean?
console.log(pets);
console.log(pets[0]);
console.log(pets[3]);

for (let index =0; index < pets.length; index++) {
    console.log(pets[index]); // what is this doing
} // if you change index number - it will display the itewms in the list from that index number in the list

pets.forEach((pet) => {
    console.log(pet)
}); // this makes more sense - for each pet in the list, console log pet

//conditionals
pet = "Ivy";

if (pet == "Chilli") {
    console.log("OMG you are the cutest!");
} else if (pet == "Ivy") {
    console.log("Naaaaw cute bow.");
} else {
    console.log("OMG so cute.");
}

