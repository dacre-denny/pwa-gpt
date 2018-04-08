export function setTestAge(age) {
    return {
        type: 'SET_AGE_RANGE',
        age
    }
}

export function startTest() {
    
 
    return {
        type: 'START_TEST',
    }
}
export function endTest() {
    
 
    return {
        type: 'END_TEST',
    }
}

export function answerQuestion(question, guilty) {
    
 
    return {
        type: 'ANSWER_QUESTION',
        question,
        guilty
    }
}

export function answerJudgement(answer) {
    return {
        type: 'ANSWER_JUDGEMENT',
        answer
    }
}