const _ = console.log

export class Survey {
  constructor(questions, validates = {}){
    this.questions = questions
    this.validates = validates
    this.lastQuestion = {}
  }

  ask(){
    const {questions} = this
    const remainQuestions = questions.filter(ques => typeof ques.answer === "undefined")
    const hasQues = remainQuestions.length > 0
    if(!hasQues) return null

    const firstRemain = remainQuestions[0]
    this.lastQuestion = firstRemain

    return firstRemain
  }

  capture(answer){
    let {lastQuestion} = this
    lastQuestion.answer = answer
    return this
  }

  setValidationMethods(newValidates){
    const {validates: lastValidates} = this
    const validates = {...lastValidates, ...newValidates}
    this.validates = validates
  }

  isValid(){
    const {lastQuestion} = this
    const {isValid, answer} = lastQuestion

    const noAns = typeof answer === "undefined"
    if(noAns) return true

    const isStrMethod = typeof isValid === "string"
    if(isStrMethod){
      const name = isValid
      const {validates} = this
      const validationMethod = validates[name]

      if(!validationMethod){
        _(`[isValid] ${name}: No validation method`)
        return true
      }

      return validationMethod(answer)
    }

    const isFuncMethod = typeof isValid === "function"
    if(isFuncMethod) return isValid(answer)

    _(`[isValid] isValid not a function`)
    return true
  }

  // validate(questions){
  //   const
  // }
}


const s = {
  questions: [
    {
      title: "What's your first name?",
      isValid: "DATE",
    },
    {
      title: "What type of flower you want to buy?",
      choices: [
        {title: "tulips"},
        {title: "rose"},
        {title: "orange"},
      ],
      isValid: (answer) => true
    },
  ],
  lastQuestion: {},
  answers: [
    {}
  ]

}