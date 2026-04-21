import API from "./api";

// Get all events
export const getEvents = () => {
  return API.get("/events");
};

// Get event by id
export const getEventById = id => {
  return API.get(`/events/${id}`);
};

// Create event
export const createEvent = (eventData, clubId) => {
  return API.post(`/events/${clubId}`, eventData);
};

// Update event
export const updateEvent = (id, eventData) => {
  return API.put(`/events/${id}`, eventData);
};
// Update register
export const updateEventRgister = (id, userId) => {
  return API.patch(`/events/${id}/register/${userId}`);
};
// Update register
export const isRegister = id => {
  return API.get(`/events/${id}/isregister`);
};

// Delete event
export const deleteEvent = id => {
  return API.delete(`/events/${id}`);
};
