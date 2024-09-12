import "./style.css";
import { TextInterface } from "text-interface";


let binary = 0;


// Get the element with id="app"
let app = document.querySelector("#app");

// Create a new "Text Interface"


let ti = new TextInterface(app, "MC, AM, AP's, Guess The Sport");


ti.output("What is your name?")
let userName = await ti.readText();
ti.output("Nice to meet you, " + userName)
ti.output(userName + ", can you think of a sport to guess?");
ti.output("The options are: soccer, basketball, football, rugby, baseball, track and field, tennis, volleyball, cricket, hockey, F1, NASCAR, and esports")
await ti.readText();
let CanYouThinkOfASportToGuess = await ti.readYesorNo;       

//first question: Allan, Aditya, Mason
ti.output(userName + ". Does the sport include balls?")
let includesBalls = await ti.readYesOrNo();
if (includesBalls) {
  ti.output ("Does the sport use a small or big ball?");
    
}else{
  ti.output("Does the sport include sticks?")
}

