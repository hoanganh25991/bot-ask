import { Survey } from "../index"
import questions2 from "./questions2.json"

const _ = console.log

_()
;(async () => {
  const TEST_CASE = "Survey Extract"
  const PASS = `\x1b[42m[PASS]\x1b[0m ${TEST_CASE}`
  const FAIL = `\x1b[41m[FAIL]\x1b[0m ${TEST_CASE}`
  let pass = true

  try {
    const survey = new Survey(questions2)
    _("[survey]", survey)

    survey.ask()
    survey.capture("anh")

    survey.ask()
    survey.capture("tulip")

    const surveyData = survey.extractData()
    _("[surveyData]", surveyData)

    pass = surveyData.name === "anh"
    if (!pass) return
  } catch (err) {
    _("[ERR]", err)
    pass = false
  } finally {
    pass ? _(PASS) : _(FAIL)
  }
})()
