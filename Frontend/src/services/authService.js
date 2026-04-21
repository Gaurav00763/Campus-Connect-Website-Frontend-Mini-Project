import API from "./api";

// Register
export const registerUser = data => {
  return API.post("/register", data);
};

// Login
export const loginUser = data => {
  return API.post("/login", data);
};

// Logout
export const logoutUser = () => {
  return API.post("/logout");
};

// Get current user
export const getCurrentUser = () => {
  return API.get("/currUser");
};
