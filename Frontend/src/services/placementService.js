import API from "./api";

// Get all placement drives
export const getPlacements = () => {
  return API.get("/drives");
};

// Get placement by id
export const getPlacementById = id => {
  return API.get(`/drives/${id}`);
};

// Create placement drive
export const createPlacement = placementData => {
  return API.post("/drives", placementData);
};

// Update placement drive
export const updatePlacement = (id, placementData) => {
  return API.put(`/drives/${id}`, placementData);
};
export const updatePlacementRegister = (id, userId) => {
  return API.patch(`/drives/${id}/register/${userId}`);
};
export const isRegister = id => {
  return API.get(`/drives/${id}/isregister`);
};
// Delete placement
export const deletePlacement = id => {
  return API.delete(`/drives/${id}`);
};
