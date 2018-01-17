import { Survey } from "../index"
import repl from "repl"
import surveyInfo from "./survey"

const { questions } = surveyInfo
const validates = {
  DATE: answer => {
    return true
  }
}

const survey = new Survey(questions, validates)
const tinyRepl = repl.start({ prompt: "(^^): " })
tinyRepl.context.survey = survey
