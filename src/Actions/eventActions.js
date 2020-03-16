import request from "superagent";

export const EVENTS_FETCHED = "EVENTS_FETCHED";

const baseUrl = "http://localhost:4000";

const allEventsFetched = events => ({
  type: EVENTS_FETCHED,
  payload: events
});

export const showAllEvents = () => (dispatch, getState) => {
  const state = getState();
  const { events } = state;

  if (!events.length) {
    request(`${baseUrl}/event`)
      .then(res => {
        const action = allEventsFetched(res.body);
        dispatch(action);
      })
      .catch(console.error);
  }
};
