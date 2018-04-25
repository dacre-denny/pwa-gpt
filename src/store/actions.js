export function deleteFollowUp(id) {
  return {
    type: "DELETE_FOLLOW_UP",
    id
  };
}

export function sendFollowUp() {
  return {
    type: "SEND_FOLLOW_UP"
  };
}

export function setField(key, value) {
  return {
    type: "SET_FIELD",
    key,
    value
  };
}

export function setTestAge(age) {
  return {
    type: "SET_AGE_RANGE",
    age
  };
}

export function startTest() {
  return {
    type: "START_TEST"
  };
}

export function endTest() {
  return {
    type: "END_TEST"
  };
}

export function answerQuestion(question, guilty) {
  return {
    type: "ANSWER_QUESTION",
    question,
    guilty
  };
}

export function answerJudgement(answer) {
  return {
    type: "ANSWER_JUDGEMENT",
    answer
  };
}
