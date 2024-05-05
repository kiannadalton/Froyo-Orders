// shows pop-up for user to input flavors
const userInputOrder = prompt(
    "Please enter your desired froyo flavors separated by commas. "
);

// splits each flavor into a string / makes an array of strings
// establishes 'flavor' as a variable for the 'for' loop later used
// flavor is assigned as an empty oject. Will be assigned value after 'for' loop
const orderArray = userInputOrder.split(",");
console.log(orderArray);
const flavors = {};

// loops through the list to add new flavors and add to existing within order
// currentFlavor is object that is assigned the value of the inputted flavors
for (let i = 0; i < orderArray.length; i++){
    const currentFlavor = orderArray[i];
    if (flavors[currentFlavor]){
        // add + 1 to the current flavor
        // ex. if strawberry is a curent flavor, add +
        // if strawberry is not a current flavor, go to else
        flavors[currentFlavor] = flavors[currentFlavor] + 1;
    }
     else {
        // current flavor is 1
        // ex.cont. if strawberry is a new flavor, +1
        flavors[currentFlavor] = 1;
    }
}

// The below function pushes the flavors to appear in inspector/console
console.log(flavors);






