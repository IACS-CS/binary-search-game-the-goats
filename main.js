import "./style.css";
import { TextInterface } from "text-interface";

let binary = 0;

// Get the element with id="app"
let app = document.querySelector("#app");

// Create a new "Text Interface"

let ti = new TextInterface(app, "MC, AM, AP's, Guess The Sport");

ti.output("What is your name?");
let userName = await ti.readText();
ti.output("Nice to meet you, " + userName);
ti.output(userName + ", can you think of a sport to guess?");
ti.output(
  "The options are: soccer, basketball, football, rugby, baseball, lacrosse, tennis, volleyball, cricket, hockey, F1, NASCAR, and esports"
);
await ti.readText();
let CanYouThinkOfASportToGuess = await ti.readYesorNo;

//first question: Allan, Aditya, Mason
ti.output(userName + ". Does the sport include balls?");
let includesBalls = await ti.readYesOrNo();
if (includesBalls) {
  ti.output(
    "Does the sport use a small or big ball? (yes for small ball, no for big ball"
  );
  let usessmallball=await ti.readYesOrNo();
  if (usessmallball) {
    // includes balls
    ti.output("Does the sport use bats?");
    let usesBats = await ti.readYesOrNo();
    if (usesBats) {
      ti.output("Is the sport baseball?");
      await ti.readYesOrNo();
    ti.output("Is the sport cricket?")} else {
      // not uses bats...
      ti.output("Is the sport tennis?");
    await ti.readYesOrNo(); 
  ti.output("Is the sport lacrosse")}
  } else { 
 //if yes to big ball... 
ti.output("Is the sport mainly played inside or outside? (yes for inside, no for outside")
  let playedInside=await ti.readYesOrNo();
if (playedInside){
  ti.output("Is your sport basketball?"); 
  await ti.readYesOrNo();
  ti.output("Is your sport volleyball?");
  } else { 
    ti.output("Is your sport soccer?"); 
    await ti.readYesOrNo(); 
    ti.output("Is your sport football?")
    await ti.readYesOrNo(); 
  }
}
}
 else {
  // does not include balls
  ti.output("Does the sport include cars?");
  let includeCars = await ti.readYesOrNo();
  if (includeCars) {
    ti.output("Is your sport F1?");
    await ti.readYesOrNo();
    if (readText) {
      ti.output("Yes");
      ti.clear();
    }
    else{
        ti.output("Is your sport NASCAR");
    }
  }
  else {
    ti.output("Does the sport include sticks?");
    let includeSticks = await ti.readYesOrNo();
    if (includeSticks) 
      await ti.output("Is your sport hockey?");
      includeSticks = await ti.readYesOrNo();
      if (includeSticks){
      ti.output("Great! I guessed the answer!");
    } else {
      ti.output("Is your sport esports?");
      await ti.readYesOrNo();
      ti.output("Great! I guessed the answer!");
    }
  }
}
