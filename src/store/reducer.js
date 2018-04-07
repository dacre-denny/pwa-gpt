const getQuestions = (age) => {
    switch (age) {
        default: {

            return [{
                    image: '/img/lie.jpg',
                    text: 'Have you ever told a lie?',
                    guilty: false,
                    verses: [
                        'John 1:1 in the beginning was the Word'
                    ]
                    
                },
                {
                    image: '/img/theft.jpg',
                    text: 'Have you ever stolen anything?',
                    guilty: false,
                    verses: [
                        'John 1:1 in the beginning was the Word',
                        'John 1:1 in the beginning was the Word'
                    ]
                },
                {
                    image: '/img/lust.jpg',
                    text: 'Have you looked at someone with lust?',
                    guilty: false,
                    verses: [
                        'John 1:1 in the beginning was the Word',
                        'John 1:1 in the beginning was the Word'
                    ]
                },
                {
                    image: '/img/hate.jpg',
                    text: 'Have you ever felt anger or hatred towards someone?',
                    guilty: false,
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
    next_url : '/test/question',
    test: getQuestions(),
    index: 0,
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
                var index = Math.min(state.index, test.length - 1);

                if (index < test.length) {
                    test[index].guilty = action.guilty;
                }

                index = Math.min(index + 1, test.length - 1)
                
                state.questions_complete = (index >= test.length - 1)
                return {
                    ...state,
                    test,
                    index : index
                }
                break;
            }
        default:
            {

                return state;
            }
    }

}