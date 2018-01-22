"use strict"

var _botSurvey = require("bot-survey")

var _questions = require("./questions2")

var _questions2 = _interopRequireDefault(_questions)

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

const survey = new _botSurvey.Survey(_questions2.default)

survey.ask()
