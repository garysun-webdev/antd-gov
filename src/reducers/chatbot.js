import {
  FETCH_STARTED,
  FETCH_SUCCESS,
  PUSH_MESSAGE
} from "../actions/chatbotActions";

const initialState = [
  {
    id: 0,
    sender: "bot",
    data: "Hi, what can I do for you today?"
  }
];

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_STARTED:
      return [
        ...state,
        {
          id: action.id,
          sender: "bot",
          data: "loading"
        }
      ];
    case FETCH_SUCCESS:
      //do not modify the existing one but create a new one
      return state.map(msg => {
        if (msg.id === action.id) {
          return { ...msg, data: action.data };
        } else {
          return msg;
        }
      });

    case PUSH_MESSAGE:
      return [...state, action.data];

    default:
      return state;
  }
  console.log("Action received", action);
  return state;
}
