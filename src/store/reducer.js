import * as API from "../api";

const initial = {
  age: "child",
  phone_number: "",
  test: API.getQuestions("child"),
  index: -1,
  form: {
    name: "",
    contact: ""
  }
};

export default (state = initial, action) => {
  switch (action.type) {

    case "DELETE_FOLLOW_UP": {

      API.removeFollowUp(action.id)

      return {
       ...state 
      }
    }

    case "SEND_FOLLOW_UP": {
      
      API.addFollowUp(state.form.name, state.form.contact)
      
      return {
        ...state,
        form: {
          name: "",
          contact: ""
        }
      };
    }

    case "SET_FIELD": {
      const form = {
        ...state.form
      };

      form[action.key] = action.value;

      return {
        ...state,
        form
      };
    }

    case "RESTART": {
      return {
        age: "child",
        phone_number: "",
        test: [],
        index: -1,
        form: {
          name: "",
          contact: ""
        }
      };
    }

    case "SET_AGE_RANGE": {
      return {
        ...state,
        age: action.age
      };
    }

    case "END_TEST": {
      return {
        ...state,
        test: [],
        index: -1
      };
    }

    case "START_TEST": {
      return {
        ...state,
        test: API.getQuestions(state.age),
        index: 0
      };
    }

    case "ANSWER_QUESTION": {
      var test = [].concat(state.test);
      var index = Math.max(0, Math.min(state.index, test.length - 1));

      if (index < test.length) {
        test[index].guilty = action.guilty;
      }

      index = Math.min(index + 1, test.length - 1);

      return {
        ...state,
        test,
        index: index
      };
      break;
    }
    default: {
      return state;
    }
  }
};
