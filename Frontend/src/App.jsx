import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
// import Home from "./pages/Home";
// import Dashboard from "./pages/Dashboard";

// Clubs
import ClubsList from "./pages/Clubs/ClubsList";
import ClubDetails from "./pages/Clubs/ClubDetails";
import CreateClub from "./pages/Clubs/CreateClub";
import EditClub from "./pages/Clubs/EditClub";
import RegisterClubAdmin from "./pages/Clubs/RegisterClubAdmin";

// Events
import EventsList from "./pages/Events/EventsList";
import EventDetails from "./pages/Events/EventDetails";
import CreateEvent from "./pages/Events/CreateEvent";
import EditEvent from "./pages/Events/EditEvent";

// Placements
import PlacementList from "./pages/Placements/PlacementList";
import PlacementDetails from "./pages/Placements/PlacementDetails";
import CreatePlacement from "./pages/Placements/CreatePlacement";
import EditPlacement from "./pages/Placements/EditPlacement";

import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";

// Auth
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          {/* Home */}
          <Route path="/" element={<Home />} />

          {/* Dashboard */}
          {/* <Route path="/dashboard" element={<Dashboard />} /> */}

          {/* Clubs Routes */}
          <Route path="/clubs" element={<ClubsList />} />
          <Route path="/clubs/:id" element={<ClubDetails />} />
          <Route path="/clubs/admin/register" element={<RegisterClubAdmin />} />
          <Route path="/clubs/create" element={<CreateClub />} />
          <Route path="/clubs/edit/:id" element={<EditClub />} />

          {/* Events Routes */}
          <Route path="/events" element={<EventsList />} />
          <Route path="/events/:id" element={<EventDetails />} />
          <Route path="/events/:clubId/create" element={<CreateEvent />} />
          <Route path="/events/edit/:id" element={<EditEvent />} />

          {/* Placement Routes */}
          <Route path="/placements" element={<PlacementList />} />
          <Route path="/placements/:id" element={<PlacementDetails />} />
          <Route path="/placements/create" element={<CreatePlacement />} />
          <Route path="/placements/edit/:id" element={<EditPlacement />} />
          <Route path="/dashboard" element={<Dashboard />} />

          {/* Auth Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>

      <Footer />
    </Router>
  );
}

export default App;
