import { Survey } from "../index"
import repl from "repl"
import questions from "./questions"

const validates = {
  DATE: answer => {
    return answer === "anh"
  }
}

const survey = new Survey(questions, validates)
const tinyRepl = repl.start({ prompt: "(^^): " })
tinyRepl.context.survey = survey
