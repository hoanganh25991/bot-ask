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

const questions3 = [
  {
    title: "What's your first name?",
    isValid: "DATE",
    key: "name",
    shouldAsk: true,
    fieldTitle: "Name"
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
    key: "flower",
    fieldTitle: "Flower"
  }
]

const _ = console.log

_()
_asyncToGenerator(function*() {
  const TEST_CASE = "Survey Ask & capture"
  const PASS = `\x1b[42m[PASS]\x1b[0m ${TEST_CASE}`
  const FAIL = `\x1b[41m[FAIL]\x1b[0m ${TEST_CASE}`
  let pass = true

  try {
    const SHOULD_ASK = true
    const survey = new _index.Survey(questions3)

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
