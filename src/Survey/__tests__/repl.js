import repl from "repl"
import { Survey } from "../index"
import questions from "./questions.json"

const validates = {
  DATE: answer => {
    return answer === "anh"
  }
}

const survey = new Survey(questions, validates)
const tinyRepl = repl.start({ prompt: "(^^): " })
tinyRepl.context.survey = survey
