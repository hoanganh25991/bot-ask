import { Survey } from "../index"
import questions from "./questions2.json"

const _ = console.log

_()
;(async () => {
  const TEST_CASE = "Survey Ask & capture"
  const PASS = `\x1b[42m[PASS]\x1b[0m ${TEST_CASE}`
  const FAIL = `\x1b[41m[FAIL]\x1b[0m ${TEST_CASE}`
  let pass = true

  try {
    const survey = new Survey(questions)
    survey.ask()
    survey.capture("anh")

    survey.resetLastAsk()
    survey.ask()
    pass = survey.lastQuestion.title === "What's your first name?"
    if (!pass) return
  } catch (err) {
    _("[ERR]", err)
    pass = false
  } finally {
    pass ? _(PASS) : _(FAIL)
  }
})()
