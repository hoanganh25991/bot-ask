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
    const SHOULD_ASK = true
    const survey = new Survey(questions3)

    const shouldAskQues = survey.ask(SHOULD_ASK)
    survey.capture("anh")
    pass = shouldAskQues.title === "What's your first name?"
    if (!pass) return _("[requiredQues]", shouldAskQues)

    const normalQues = survey.ask()
    pass = normalQues.title === "What type of flower you want to buy?"
    if (!pass) return _("[normalQues]", normalQues)

    const ques = survey.ask(SHOULD_ASK)
    pass = ques === null
    if (!pass) return _("[ques]", ques)
  } catch (err) {
    _("[ERR]", err)
    pass = false
  } finally {
    pass ? _(PASS) : _(FAIL)
  }
})()
