import "./style.css";
import { TextInterface } from "text-interface";


let binary = 0;


// Get the element with id="app"
let app = document.querySelector("#app");

// Create a new "Text Interface"

let ti = new TextInterface(app, "MC, AM, AP's, Guess The Sport");
ti.output("Your options are soccer, basketball, football, rugby, baseball, track and field, tennis, volleyball, cricket, hockey, F1, esports"); 
ti.output("")
let name = await ti.readText();
ti.output("Hello, " + name);

