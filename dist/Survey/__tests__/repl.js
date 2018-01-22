"use strict"

var _repl = require("repl")

var _repl2 = _interopRequireDefault(_repl)

var _index = require("../index")

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
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
    ]
  }
]

const validates = {
  DATE: answer => {
    return answer === "anh"
  }
}

const survey = new _index.Survey(questions, validates)
const tinyRepl = _repl2.default.start({ prompt: "(^^): " })
tinyRepl.context.survey = survey
