import axios from "axios";

export const FETCH_MESSAGE = "FETCH_MESSAGE";
export const FETCH_STARTED = "FETCH_STARTED";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAILURE = "FETCH_FAILURE";
export const PUSH_MESSAGE = "PUSH_MESSAGE";

let nextMsg = 1;

export function fetchMessageStarted() {
  return {
    type: FETCH_STARTED,
    id: nextMsg
  };
}

export function fetchMessageSuccess(result) {
  return {
    type: FETCH_SUCCESS,
    data: result.data,
    id: nextMsg++
  };
}

export function fetchMessageFailure(error) {
  return {
    type: FETCH_FAILURE,
    error,
    id: nextMsg++
  };
}

export function fetchMessage(userMsg) {
  return dispatch => {
    dispatch(fetchMessageStarted());
    axios
      .post("https://chatbot-server-eaglegogogo.c9users.io/message", {
        text: userMsg
      })
      .then(response => dispatch(fetchMessageSuccess(response)))
      .catch(error => dispatch(fetchMessageFailure(error)));

    // axios
    //   .post("https://chatbot-server-eaglegogogo.c9users.io/message", {
    //     text: userMsg
    //   })
    //   .then(function(response) {
    //     console.log(response.data);
    //   })
    //   .catch(function(error) {
    //     console.log(error);
    //   });

    // return {
    //   type: FETCH_MESSAGE,
    //   payload: request,
    //   id: nextMsg++
    // };
  };
}

export function pushMessage(userMsg) {
  return {
    type: PUSH_MESSAGE,
    data: {
      id: nextMsg++,
      sender: "user",
      data: userMsg
    }
  };
}
