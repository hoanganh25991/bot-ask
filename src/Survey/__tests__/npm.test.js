import { Survey } from "bot-survey"
import questions from "./questions2"

const survey = new Survey(questions)

survey.ask()
