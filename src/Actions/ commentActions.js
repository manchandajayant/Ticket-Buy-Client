import request from "superagent";

export const NEW_COMMENT = "NEW_COMMENT";
export const FETCH_COMMENTS = "FETCH_COMMENTS";

const baseUrl = "http://localhost:4000";

const newCommentCreated = comment => ({
  type: NEW_COMMENT,
  payload: comment
});

export const newTicket = data => (dispatch, getState) => {
  const state = getState();
  const { comment } = state;
  request
    .post(`${baseUrl}/comment`)
    .send(data)
    .then(res => {
      const action = newCommentCreated(res.body);
      dispatch(action);
    })
    .catch(console.error);
};
const fetchCommentsById = comment => ({
  type: FETCH_COMMENTS,
  payload: comment
});

export const fetchComments = ticketId => (dispatch, getState) => {
  request
    .get(`${baseUrl}/comment/${ticketId}`)
    .send(ticketId)
    .then(res => {
      console.log(res.body);
      const action = fetchCommentsById(res.body);
      dispatch(action);
      // console.log("comments", res.body);
    })
    .catch(console.error);
};
