// ***** Variable ***** //
/* 
    Create a few variables that store a value of string, number, and boolean. Choose your own topic.
*/

//CODE HERE
const marley = "dog";
let age = 12;
let attitude = true;

//console.log(typeof age) gives you the datatype in the console


// ***** Array ***** //
/*
    Create an array of strings called 'codingLanguage' that include 4 coding language of your choice. 
*/

//CODE HERE

const codingLanguage = ["Javascript", "Python", "Java", "C++"]

/* 
    Access the 3rd element of the 'codingLanguage' array.
*/

//CODE HERE
console.log(codingLanguage[2]);

/*
    Copy the array using one of the array methods, and call it 'codingLanguage2.'
*/

//CODE HERE
let codingLanguage2 = codingLanguage.slice(0);
console.log(codingLanguage2);
//can also use codingLanguage.slice(0, codingLanguage.length) but 0 does the same thing
/* 
    Add another coding language to the codingLanguage2 array.
*/

//CODE HERE
codingLanguage2.push("Rust")
console.log(codingLanguage2)
//codingLanguage2.unshift("Rust") will add to the beginning of an array

// !!! Don't edit the code below !!! //
let instruments = ['piano', 'trumpet', 'xylophone', 'flute', 'cello']
// !!! Don't edit the code above !!! //

/* 
    Use a built-in array function to remove 'cello' from the instruments array.
*/

//CODE HERE

instruments.pop();
console.log(instruments);
/* 
    Use a built-in array function to remove 'piano' from the instruments array
*/

//CODE HERE

instruments.shift();
console.log(instruments);
/* 
    Use a built-in array function to add 'guitar' to the front of the instruments array
*/

//CODE HERE
instruments.unshift("guitar");
console.log(instruments);

/* 
    Use a built-in array function to replace 'xylophone' in the instruments array to 'glockenspiel.'
*/

//CODE HERE

instruments.splice(2,1,"glockenspiel");
console.log(instruments);

// ***** if-else ***** //
/* 
    Discuss the if-else statement syntax.
*/
//if(condition) {
//    code
// } else if (condition) {
  //  code
// } else {
   // code
// }
// !!! Don't edit the code below !!! //
let num = 11;
// !!! Don't edit the code above !!! //

/* 
    Refer to the num variable above.
    If num is an even number, print num. Otherwise, print 'num is not an even number.'
*/

//CODE HERE
if (num % 2 === 0) {
    console.log(num);
} else {
    console.log("num is not an even number");
}

// !!! Don't edit the code below !!! //
let score = 83;
// !!! Don't edit the code above !!! //
/* 
    Refer to the score variable above.
    Using if-else statement, determine the grade of the above score.
    If the score is less than and equal to 10, print 'Failed.'
    If the the score is between 10 and 41, print 'The grade is C.'
    If the the score is between 40 and 71, print 'The grade is B.'
    If the the score is above 70, print 'The grade is A.'
*/

//CODE HERE
if (score <= 10) {
    console.log("Failed")
} else if (score > 10 && score < 41) {
    console.log("The grade is C")
} else if (score > 40 && score < 71) {
    console.log("The grade is B")
} else {
    console.log("The Grade is A")
}


// ***** For Loop ***** //
/* 
    Discuss the for loop syntax.
*/

// !!! Don't edit the code below !!! //
let price = [10, 5, 6];
// !!! Don't edit the code above !!! //

/* 
    Using for loop, calculate the total price from the 'price' array above.
*/

//CODE HERE
let totalPrice = 0;
for (let i = 0; i < price.length; i++) {
 totalPrice += price[i]
 // total = total + price[i] long version same thing as above
}
console.log(totalPrice);


/* 
    Using the 'totalPrice,' find the average of 'price.'
*/

let totalAverage = totalPrice / price.length
console.log(totalAverage);

// !!! Don't edit the code below !!! //
let colors = ['red', 'green', 'yellow', 'red', 'green']
// !!! Don't edit the code above !!! //

/* 
    Loop through the colors array above. Then, print 'apple' if the color is red, print 'melon' if the color is green, and print 'banana' when the color is yellow.
*/

// CODE HERE
for (let i = 0; i < colors.length; i++) {
    if(colors[i] === "red") {
        console.log("apple")
    } else if (colors[i] === "green") {
        console.log("melon")
    } else if (colors[i] === "yellow") {
        console.log("banana")
    }
}


// ***** Software Development Life Cycle (SDLC) ***** //
/* 
    Discuss SDLC:
    -- Planning - Deciding what you want to build
    -- Analysis of Requirements - What programs needed/features
    -- Design - How it will look
    -- Implementation
    -- Testing & Integration
    -- Maintain
*/

// ***** Git ***** //
/* 
    Discuss:
    - Definition of:
        -- git- DevOps tool used for source code management
        -- github- way to store your code in the cloud
        -- git init- initializes github repo
        -- git clone -Copy a repo from GitHub and put it on my machine
        -- git status - Check status of push
        -- git add - add changes to your repo on GitHub
        -- git commit - adding commit to repo-includes message
        -- git push- pushing changes to github repo
    - How to push git to github
*/

