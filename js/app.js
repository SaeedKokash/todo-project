'use strict';

//Phase 1 Requirements:

//Ask the user to enter his/her name as input.
var userName = prompt("Please enter your First Name")

console.log("First Name: ",userName)

//Ask the user to enter his/her gender as input. The answer should be either (male or female).
var userGender = prompt("Enter your gender (male/female)")

console.log("Gender: ",userGender)

//Ask the user to enter his/her age as input and alert the user if the age is less than or equal to zero.
var userAge = prompt("Enter your age")

if (userAge <= 0) {
    alert("please check your age");
} else {
    console.log("Age: ",userAge);
}

//Ask the user to confirm if he wants to skip the welcoming message.
var welcomeMsg = confirm("Would you like to skip the welcoming message?")

console.log("skipping the Welcoming message answer: ",welcomeMsg)

//Alert a welcoming message with the name of the user and the title Mr if the user is male and Ms if the user is female, and if the gender input is not 
//correct alert the welcoming message without the title, according to the confirmation.

if (welcomeMsg == false) {

    if ((userGender == "male") && (userAge > 0)) {
        alert("Welcome Mr. " + userName)
    } else if ((userGender == "female") && (userAge > 0)) {
        alert("Welcome Ms. " + userName)
    } else if (userAge <= 0) {
        alert("Welcome " + userName)
    }

} else {

    console.log("the user skipped the welcome message")

}
//Continue working on the styling of the project.
// done that!

// Phase 2 Requirements:

// As a user, I would like to answer more questions, so you should add new three (Yes/No) questions.

// If the input was empty consider the answer as an "invalid" string.

// Consider putting all the answers into an array.

var hobbieList=[]

hobbieList[0]= prompt("Do you like Football? (Yes/No)")

if (hobbieList[0] == "" || hobbieList[0] == null) {
    alert("answer invalid")
    hobbieList[0] = "invalid"
}

hobbieList[1]= prompt("Do you like Coding? (Yes/No)")

if (hobbieList[1] == "" || hobbieList[1] == null) {
    alert("answer invalid")
    hobbieList[1] = "invalid"
}

hobbieList[2]= prompt("Do you like Reading? (Yes/No)")

if (hobbieList[2] == "" || hobbieList[2] == null) {
    alert("answer invalid")
    hobbieList[2] = "invalid"
}

// Traverse the array and print the items on the console.

for (let i = 0; i < hobbieList.length; i++) {
    console.log(hobbieList[i]);
} 

console.log(hobbieList)


// Confirm that your code is following the single responsibility rule. Each function should only do one thing.
// All functions and variables should have a meaningful name (use camelCase).