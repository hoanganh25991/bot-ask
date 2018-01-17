"use strict"

var _index = require("../index")

function _asyncToGenerator(fn) {
  return function() {
    var gen = fn.apply(this, arguments)
    return new Promise(function(resolve, reject) {
      function step(key, arg) {
        try {
          var info = gen[key](arg)
          var value = info.value
        } catch (error) {
          reject(error)
          return
        }
        if (info.done) {
          resolve(value)
        } else {
          return Promise.resolve(value).then(
            function(value) {
              step("next", value)
            },
            function(err) {
              step("throw", err)
            }
          )
        }
      }
      return step("next")
    })
  }
}

const state = {
  questions: [
    {
      title: "What's your first name?",
      isValid: "DATE",
      answer: "anh"
    }
  ],
  lastQuestion: {
    title: "What's your first name?",
    answer: "anh"
  }
}

const _ = console.log

_()
_asyncToGenerator(function*() {
  const TEST_CASE = "Survey Recovery"
  const PASS = `\x1b[42m[PASS]\x1b[0m ${TEST_CASE}`
  const FAIL = `\x1b[41m[FAIL]\x1b[0m ${TEST_CASE}`
  let pass = true

  try {
    const survey = _index.Survey.recovery(state)
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
