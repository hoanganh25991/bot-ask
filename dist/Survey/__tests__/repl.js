"use strict"

var _repl = require("repl")

var _repl2 = _interopRequireDefault(_repl)

var _index = require("../index")

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
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

// const validates = {
//   DATE: answer => {
//     return answer === "anh"
//   }
// }

// const survey = new Survey(questions3, validates)

const survey = new _index.Survey(questions3)
const tinyRepl = _repl2.default.start({ prompt: "(^^): " })
// survey.askField("Name")
// survey.askField("Flower")
tinyRepl.context.survey = survey
