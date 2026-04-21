import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const { user, logout } = useContext(AuthContext);
  function handleLogut() {
    navigate("/login");
    logout();
  }
  return (
    <nav className="bg-[#061944] text-white shadow-md fixed w-screen">
      <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center ">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <img src="public/logo.png" alt="Logo" className="w-50" />
        </div>

        {/* Navigation Links */}
        <ul className="flex gap-8 text-lg">
          <li>
            <Link to="/" className="hover:text-sky-400 transition">
              Home
            </Link>
          </li>

          <li>
            <Link to="/clubs" className="hover:text-sky-400 transition">
              Clubs
            </Link>
          </li>

          <li>
            <Link to="/events" className="hover:text-sky-400 transition">
              Events
            </Link>
          </li>

          <li>
            <Link to="/placements" className="hover:text-sky-400 transition">
              Placements
            </Link>
          </li>
          {user && user.role === "student" ? (
            <li>
              <Link to="/dashboard" className="hover:text-sky-400 transition">
                Dashboard
              </Link>
            </li>
          ) : (
            <></>
          )}
        </ul>

        {/* Auth Buttons */}
        <div className="flex gap-4">
          {!user ? (
            <>
              <Link
                to="/login"
                className="border border-white px-4 py-1 rounded hover:bg-white hover:text-black transition"
              >
                Login
              </Link>

              <Link
                to="/register"
                className="bg-sky-500 px-4 py-1 rounded hover:bg-sky-600 transition"
              >
                Register
              </Link>
            </>
          ) : (
            <>
              <button
                onClick={handleLogut}
                className="bg-sky-500 px-4 py-1 rounded hover:bg-sky-600 transition"
              >
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
