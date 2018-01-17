import { Survey } from "../index"
import state from "./state.json"

const _ = console.log

_()
;(async () => {
  const TEST_CASE = "Survey Recovery"
  const PASS = `\x1b[42m[PASS]\x1b[0m ${TEST_CASE}`
  const FAIL = `\x1b[41m[FAIL]\x1b[0m ${TEST_CASE}`
  let pass = true

  try {
    const survey = Survey.recovery(state)
    _("[survey]", survey)
    const next = survey.ask()
    return (pass = next === null)
  } catch (err) {
    _("[ERR]", err)
    pass = false
  } finally {
    pass ? _(PASS) : _(FAIL)
  }
})()
