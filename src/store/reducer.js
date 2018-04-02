const stage = {

}

const questions = [{
        image: '/0.jpg',
        text: 'Have you ever told a lie?'
    },
    {
        image: '/1.jpg',
        text: 'Have you ever stolen anything?'
    }
]

const initial = {
    age: 0,
    phone_number: '',
    answers: [],
    question_index: 0,
    concluded: false
}

export default (state = initial, action) => {

    switch (action.type) {

        case 'SET_AGE_RANGE':
            {
                state.age = age
                break;
            }

        case 'START_TEST':
            {

                state.question_index = 0;

                break;
            }

        case 'ANSWER_QUESTION':
            {
                state.answers.push({

                    question: action.question,
                    answer: answer
                })

                state.question_index += 1;

                if (state.question_index > questions.length) {
                    state.concluded = true;
                }

                break;
            }

    }

    return state;
}