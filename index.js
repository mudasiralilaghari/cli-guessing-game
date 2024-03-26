#! /usr/bin/env node
import inquirer from "inquirer";
const random = 0;
const answers = await inquirer.prompt([{
        message: "Please guess a number between 1 - 6 : ",
        type: "number",
        name: "Guessednumber",
    }]);
if (answers.Guessednumber === random) {
    console.log("Congratulations you guessed a right number");
}
else {
    console.log("You Guessed wrong number");
}
