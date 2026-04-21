import API from "./api";

// Get all clubs
export const getClubs = () => {
  return API.get("/clubs");
};

// Get single club
export const getClubById = id => {
  return API.get(`/clubs/${id}`);
};

// Create club
export const createClub = (clubData, id) => {
  return API.post(`/clubs/${id}/create`, clubData);
};

// Update club
export const updateClub = (id, clubData) => {
  return API.put(`/clubs/${id}`, clubData);
};

// Delete club
export const deleteClub = id => {
  return API.delete(`/clubs/${id}`);
};
