import axios from "axios";

export const FETCH_MESSAGE = "FETCH_MESSAGE";
export const FETCH_STARTED = "FETCH_STARTED";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAILURE = "FETCH_FAILURE";
export const PUSH_MESSAGE = "PUSH_MESSAGE";

let msgId = 1;

export function fetchMessageStarted(id) {
  return {
    type: FETCH_STARTED,
    id
  };
}

export function fetchMessageSuccess(result, id) {
  return {
    type: FETCH_SUCCESS,
    data: result.data,
    id
  };
}

export function fetchMessageFailure(error, id) {
  return {
    type: FETCH_FAILURE,
    error,
    id
  };
}

export function fetchMessage(userMsg) {
  return dispatch => {
    dispatch(fetchMessageStarted(msgId));
    const thisId = msgId;
    msgId++;
    axios
      .post("https://chatbot-server-eaglegogogo.c9users.io/message", {
        text: userMsg
      })
      .then(response => dispatch(fetchMessageSuccess(response, thisId)))
      .catch(error => dispatch(fetchMessageFailure(error, thisId)));
  };
}

export function pushMessage(userMsg) {
  return {
    type: PUSH_MESSAGE,
    data: {
      id: msgId++,
      sender: "user",
      data: userMsg
    }
  };
}
