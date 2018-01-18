import repl from "repl"
import { Survey } from "../index"
import questions3 from "./questions3.json"

// const validates = {
//   DATE: answer => {
//     return answer === "anh"
//   }
// }

// const survey = new Survey(questions3, validates)
const survey = new Survey(questions3)
const tinyRepl = repl.start({ prompt: "(^^): " })
// survey.askField("Name")
// survey.askField("Flower")
tinyRepl.context.survey = survey
