import request from "superagent";

export const NEW_TICKET = "NEW_TICKET";
export const FETCH_TICKET = "FETCH_TICKET";
export const TICKETS_FETCHED = "TICKETS_FETCHED";

const baseUrl = "http://localhost:4000";

const newTicketCreated = events => ({
  type: NEW_TICKET,
  payload: events
});

export const newTicket = data => dispatch => {
  request
    .post(`${baseUrl}/ticket`)
    .send(data)
    .then(res => {
      const action = newTicketCreated(res.body);
      dispatch(action);
    })
    .catch(console.error);
};

const singleTicket = ticket => ({
  type: FETCH_TICKET,
  payload: ticket
});

export const fetchTicket = id => (dispatch, getState) => {
  request
    .get(`${baseUrl}/ticket/${id}`)
    .send(id)
    .then(res => {
      console.log(res.body);
      const action = singleTicket(res.body);
      dispatch(action);
      // console.log("in action", res.body);
    })
    .catch(console.error);
};

const allTicketsFetched = events => ({
  type: TICKETS_FETCHED,
  payload: events
});

export const showAllTickets = () => dispatch => {
  request(`${baseUrl}/ticket`)
    .then(res => {
      const action = allTicketsFetched(res.body);
      dispatch(action);
    })
    .catch(console.error);
};
