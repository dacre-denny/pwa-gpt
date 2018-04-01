export function setAgeRange(range) {
    return {
        type: 'SET_AGE_RANGE',
        range
    }
}

export function answerQuestion(question, answer) {
    return {
        type: 'ANSWER_QUESTION',
        question,
        answer
    }
}

export function progress(question, answer) {
    return {
        type: 'ANSWER_QUESTION',
        question,
        answer
    }
}