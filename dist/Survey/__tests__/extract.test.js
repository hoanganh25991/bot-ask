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

const questions2 = [
  {
    title: "What's your first name?",
    isValid: "DATE",
    key: "name"
  },
  {
    title: "What type of flower you want to buy?",
    choices: [
      {
        title: "tulip"
      },
      {
        title: "rose"
      },
      {
        title: "orange"
      }
    ],
    isValid: "FLOWERS",
    key: "flower"
  }
]

const _ = console.log

_()
_asyncToGenerator(function*() {
  const TEST_CASE = "Survey Extract"
  const PASS = `\x1b[42m[PASS]\x1b[0m ${TEST_CASE}`
  const FAIL = `\x1b[41m[FAIL]\x1b[0m ${TEST_CASE}`
  let pass = true

  try {
    const survey = new _index.Survey(questions2)
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
