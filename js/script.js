
// Question 1  Write code that logs the following variable to the console.


const instrument = "guitar";

console.log ("guitar"); 



//  Question 2 Log the following variable to the console.


const button = document.querySelector("button.login");

console.log (button); 

//  Question 3  Log the following variable to the console in table format.

const instruments = [
    {
        type: "guitar",
        colour: "red",
    },
    {
        type: "piano",
        colour: "black",
    },
];

console.table (instruments); 


// Question 4 Convert the following code to use either a `const` or `let` variables.


const name = "Percival";
let age = 13;


// Question 5 Convert the following code to use either a `const` or `let` variable.


let total = 0;
total = total + 10;


// Question 6 Convert the following code to use either a `const` or `let` variable.


for (let i = 0; i <= 5; i++) {
    console.log(i);
}


// Question 7 Convert the following to use backticks:


const firstName = "Florence";

const introduction = `Hello, my name is ${firstName}.`;

console.log(introduction);


// Question 8  Convert the following to use backticks:


const title = "Big Technical Event";

const whatToHave = "good time";

const welcome = `Welcome!
                This ${title} is starting today.
                Have a ${whatToHave}!`;

console.log(welcome);


// Question 9 Log each property in the object below.


const car = {
    "paint-colour": "red",
    "number of wheels": 3
};

console.log (paint-color, number of wheels);


//  Question 10 Add a function (method) called getExpired to the object below that logs the expired status of the object. Call the function after adding it.


const product = {
    name: "Chicken Lips",
    price: 35,
    expired: false
}

function getExpired (product) {
    if (product === expired){
        console.log ("expired")
    }
}

getExpired = "expired";