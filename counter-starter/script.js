function addition() {
    console.log("Look at me I'm adding numbers");
}

function add(step) {
    let numberElement = document.getElementById("number");
    let number = numberElement.innerText; //number is a string
    number = parseInt(number) + step; //reassigning the number to be number +1 and number turned into whole int
    numberElement.innerText = number; //reassining the inner text to be number
    }

function takeaway(step) {
    let numberElement = document.getElementById("number");
    let number = numberElement.innerText; //number is a string
    number = parseInt(number) - step; //reassigning the number to be number +1 and number turned into whole int
    numberElement.innerText = number; //reassining the inner text to be number
    }

