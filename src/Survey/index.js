const _ = console.log

export class Survey {
  constructor(questions, validates = {}) {
    this.questions = questions
    this.validates = validates
  }

  ask() {
    const { questions } = this
    const remainQuestions = questions.filter(ques => typeof ques.answer === "undefined")
    const hasQues = remainQuestions.length > 0
    if (!hasQues) return null

    const firstRemain = remainQuestions[0]
    this.lastQuestion = firstRemain

    return firstRemain
  }

  capture(answer) {
    let { lastQuestion } = this

    if (!lastQuestion) {
      _("[capture] No question asked to capture")
      return this
    }

    lastQuestion.answer = answer
    return this
  }

  setValidationMethods(newValidates) {
    const { validates: lastValidates } = this
    const validates = { ...lastValidates, ...newValidates }
    this.validates = validates
  }

  getLastQuestion() {
    return this.lastQuestion
  }

  isValid() {
    const { lastQuestion } = this

    if (!lastQuestion) {
      _("[isValid] No question asked to validate")
      return true
    }

    return this.validate(lastQuestion)
  }

  validate(question) {
    const { isValid, answer } = question

    const noAns = typeof answer === "undefined"
    const noValidMethod = !isValid
    const obmitValidate = noAns || noValidMethod
    if (obmitValidate) return true

    const isStr = typeof isValid === "string"
    if (isStr) {
      const name = isValid
      const { validates } = this
      const validationMethod = validates[name]

      if (!validationMethod) {
        _(`[isValid] ${name}: Validation method not found`)
        return true
      }

      const isFunc = typeof validationMethod === "function"
      if (isFunc) return validationMethod(answer)

      _(`[isValid] isValid not a function`)
      return true
    }

    const isFunc = typeof isValid === "function"
    if (isFunc) return isValid(answer)

    _(`[isValid] isValid not a function`)
    return true
  }
}
