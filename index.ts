#! /usr/bin/env node
//SHABANG
import inquirer from "inquirer"

const randomNumber = Math.floor(Math.random() * 10) + 1;

const answers: {
    userGuess: number
} = await inquirer.prompt([
    {
        name: "userGuess",
        type: "number",
        message: "Guess the number between 1 to 10"
    }
]);
 if(answers.userGuess === randomNumber){
    console.log("You guessed it right");
 }else{
    console.log("You guessed it wrong");
 }