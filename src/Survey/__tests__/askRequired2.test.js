import { Survey } from "../index"
import questions3 from "./questions3.json"

const _ = console.log

_()
;(async () => {
  const TEST_CASE = "Survey Ask & capture"
  const PASS = `\x1b[42m[PASS]\x1b[0m ${TEST_CASE}`
  const FAIL = `\x1b[41m[FAIL]\x1b[0m ${TEST_CASE}`
  let pass = true

  try {
    const REQUIRED_QUES = true
    const survey = new Survey(questions3)

    const requiredQues = survey.ask(REQUIRED_QUES)
    survey.capture("anh")
    pass = requiredQues.title === "What's your first name?"
    if (!pass) return _("[requiredQues]", requiredQues)

    const normalQues = survey.ask()
    pass = normalQues.title === "What type of flower you want to buy?"
    if (!pass) return _("[normalQues]", normalQues)

    const ques = survey.ask(REQUIRED_QUES)
    pass = ques === null
    if (!pass) return _("[ques]", ques)
  } catch (err) {
    _("[ERR]", err)
    pass = false
  } finally {
    pass ? _(PASS) : _(FAIL)
  }
})()
