const getQuestions = (age) => {
    switch (age) {
        default: {

            return [{
                    image: '/0.jpg',
                    text: 'Have you ever told a lie?',
                    answer: '',
                    verses: [
                        'John 1:1 in the beginning was the Word'
                    ]

                },
                {
                    image: '/1.jpg',
                    text: 'Have you ever stolen anything?',
                    answer: '',
                    verses: [
                        'John 1:1 in the beginning was the Word',
                        'John 1:1 in the beginning was the Word'
                    ]
                }
            ]
        }
    }
}

const initial = {
    age: 0,
    phone_number: '',
    test: getQuestions(),
    question_index: 0,
    concluded: false
}

export default (state = initial, action) => {

    switch (action.type) {

        case '@@redux/INIT':
            {
                return {
                    ...state,
                    test: getQuestions(state.age),
                }
            }

        case 'SET_AGE_RANGE':
            {
                return {
                    ...state,
                    test: getQuestions(state.age),
                    age: action.age

                }
            }

        case 'START_TEST':
            {
                return {
                    ...state,
                    question_index: 0

                }
            }

        case 'ANSWER_QUESTION':
            {
                var test = [].concat(state.test);
                var question_index = Math.min(state.question_index + 1, test.length - 1);

                if (question_index < test.length) {
                    test[question_index].answer = action.answer;
                }

                return {
                    ...state,
                    test,
                    question_index
                }
                break;
            }
        default:
            {

                return state;
            }
    }

}