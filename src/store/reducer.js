import { getQuestions } from "../api";

const initial = {
  age: "child",
  phone_number: "",
  test: getQuestions("child"),
  index: -1,
  form: {
    name: "",
    contact: ""
  }
};

export default (state = initial, action) => {
  switch (action.type) {
    case "SEND_FOLLOW_UP": {
      let followUps = JSON.parse(localStorage.getItem("follow_ups") || "[]");

      if (!Array.isArray(followUps)) {
        followUps = [];
      }

      const date = new Date();

      followUps.push({
        date: date.toDateString(),
        name: state.form.name,
        contact: state.form.contact
      });

      localStorage.setItem("follow_ups", JSON.stringify(followUps));

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
        test: getQuestions(state.age),
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
