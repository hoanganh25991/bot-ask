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

const questions = [
  {
    title: "What's your first name?",
    isValid: "DATE"
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
    isValid: "FLOWERS"
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
    const validates = {
      DATE: function(answer) {
        return answer === "anh"
      },
      FLOWERS: function(answer) {
        const flowers = ["tulip", "rose", "orange"]
        return flowers.includes(answer)
      }
    }

    const survey = new _index.Survey(questions, validates)
    survey.ask()
    survey.capture("anh")

    pass = survey.isValid() === true
    if (!pass) return

    survey.ask()
    survey.capture("aconitum")

    pass = survey.isValid() === false
    if (!pass) return

    // Check if question be MODIFIED
    questions.forEach(function(ques) {
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
