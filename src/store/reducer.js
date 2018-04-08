const getQuestions = (age) => {
    switch (age) {
        case 'teenager': {
            return [{
                image: '/img/teen-lie.jpg',
                text: 'Have you ever told a lie?',
                guilty: false,
                verses: [
                    'John 1:1 in the beginning was the Word'
                ]

            },
            {
                image: '/img/teen-theft.jpg',
                text: 'Have you ever stolen anything?',
                guilty: true,
                verses: [
                    'John 1:1 in the beginning was the Word',
                    'John 1:1 in the beginning was the Word'
                ]
            },
            {
                image: '/img/teen-lust.jpg',
                text: 'Have you looked at someone with lust?',
                guilty: false,
                verses: [
                    'John 1:1 in the beginning was the Word',
                    'John 1:1 in the beginning was the Word'
                ]
            },
            {
                image: '/img/teen-hate.jpg',
                text: 'Have you ever felt anger or hatred towards someone?',
                guilty: true,
                verses: [
                    'John 1:1 in the beginning was the Word',
                    'John 1:1 in the beginning was the Word'
                ]
            }
        ]
        }
        case 'adult': {
            return [{
                image: '/img/adult-lie.jpg',
                text: 'Have you ever told a lie?',
                guilty: false,
                verses: [
                    'John 1:1 in the beginning was the Word'
                ]

            },
            {
                image: '/img/adult-theft.jpg',
                text: 'Have you ever stolen anything?',
                guilty: true,
                verses: [
                    'John 1:1 in the beginning was the Word',
                    'John 1:1 in the beginning was the Word'
                ]
            },
            {
                image: '/img/adult-lust.jpg',
                text: 'Have you looked at someone with lust?',
                guilty: false,
                verses: [
                    'John 1:1 in the beginning was the Word',
                    'John 1:1 in the beginning was the Word'
                ]
            },
            {
                image: '/img/adult-hate.jpg',
                text: 'Have you ever felt anger or hatred towards someone?',
                guilty: true,
                verses: [
                    'John 1:1 in the beginning was the Word',
                    'John 1:1 in the beginning was the Word'
                ]
            }
        ]
        }
        default:
        case 'child': {
            return [{
                image: '/img/child-lie.jpg',
                text: 'Have you ever told a lie?',
                guilty: false,
                verses: [
                    'John 1:1 in the beginning was the Word'
                ]

            },
            {
                image: '/img/child-stealing.jpg',
                text: 'Have you ever stolen anything?',
                guilty: true,
                verses: [
                    'John 1:1 in the beginning was the Word',
                    'John 1:1 in the beginning was the Word'
                ]
            },
            {
                image: '/img/child-discipline.jpg',
                text: 'Have you disobeyed your parents?',
                guilty: false,
                verses: [
                    'John 1:1 in the beginning was the Word',
                    'John 1:1 in the beginning was the Word'
                ]
            },
            {
                image: '/img/child-angry.jpg',
                text: 'Have you ever felt anger or hatred towards someone?',
                guilty: true,
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
    age: 'child',
    phone_number: '',
    test: getQuestions('child'),
    index: 0,
    questions_complete: false
}

export default (state = initial, action) => {

    switch (action.type) {

        case 'SET_AGE_RANGE':
            {
                return {
                    ...state,
                    age: action.age,
                }
            }

        case 'RESET_TEST':
            { 
                return {
                    ...state,
                    test: getQuestions(state.age),
                    index: 0,

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
                    index: index
                }
                break;
            }
        default:
            {

                return state;
            }
    }

}