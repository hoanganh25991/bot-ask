const _ = console.log

export class Survey {
  constructor(questions, validates = {}) {
    this.questions = questions.map(ques => ({ ...ques }))
    this.validates = validates
  }

  static recovery(state, validates = {}) {
    const { questions, lastQuestion } = state
    const survey = new Survey(questions, validates)
    survey.lastQuestion = lastQuestion
    return survey
  }

  setValidationMethods(newValidates) {
    const { validates: lastValidates } = this
    const validates = { ...lastValidates, ...newValidates }
    this.validates = validates
  }

  ask(requiredQues = false) {
    const { questions } = this
    const remainQuestions = questions.filter(ques => {
      const noAns = typeof ques.answer === "undefined"
      const required = requiredQues ? ques.required : true
      return noAns && required
    })

    const hasQues = remainQuestions.length > 0
    if (!hasQues) return null

    const firstRemain = remainQuestions[0]
    this.lastQuestion = { ...firstRemain }

    return firstRemain
  }

  capture(answer) {
    let { lastQuestion } = this

    if (!lastQuestion) {
      _("[capture] No asked question to capture")
      return this
    }

    lastQuestion.answer = answer
    this.updateInQuestions()
    return this
  }

  updateInQuestions() {
    const { questions, lastQuestion } = this
    if (!lastQuestion) return
    const matchedQuestion = questions.filter(ques => ques.title === lastQuestion.title)[0]
    if (!matchedQuestion) return
    matchedQuestion.answer = lastQuestion.answer
  }

  resetLastAsk() {
    const { questions, lastQuestion } = this
    if (!lastQuestion) return
    const matchedQuestion = questions.filter(ques => ques.title === lastQuestion.title)[0]
    if (!matchedQuestion) return
    delete matchedQuestion.answer
  }

  getLastQuestion() {
    return this.lastQuestion
  }

  isValid() {
    const { lastQuestion } = this

    if (!lastQuestion) {
      _("[isValid] No asked question to validate")
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

      _(`[isValid] ${name}: Not a function`)
      return true
    }

    const isFunc = typeof isValid === "function"
    if (isFunc) return isValid(answer)

    _(`[isValid] isValid: Not a function`)
    return true
  }

  extractData() {
    const { questions } = this
    return questions.reduce((carry, ques) => {
      const { answer, key } = ques
      carry[key] = answer
      return carry
    }, {})
  }
}
