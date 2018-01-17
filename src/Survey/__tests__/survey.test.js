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
    const validates = {
      DATE: answer => {
        return answer === "anh"
      },
      FLOWERS: answer => {
        const flowers = ["tulip", "rose", "orange"]
        return flowers.includes(answer)
      }
    }

    const survey = new Survey(questions, validates)
    survey.ask()
    survey.capture("anh")

    pass = survey.isValid() === true
    if (!pass) return

    survey.ask()
    survey.capture("abc")
    pass = survey.lastQuestion.title === "What type of flower you want to buy?"
    if (!pass) return

    pass = survey.isValid() === false
    if (!pass) return

    // Check if question be MODIFIED
    questions.forEach(ques => {
      const hasAns = typeof ques.answer !== "undefined"
      // Expect question DOESNT HAVE ANS
      pass = pass && !hasAns
    })
  } catch (err) {
    _("[ERR]", err)
    pass = false
  } finally {
    pass ? _(PASS) : _(FAIL)
  }
})()
