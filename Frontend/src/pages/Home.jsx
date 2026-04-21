import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <section className="bg-cover bg-center h-105 flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d')] ">
        <div className="text-center bg-black/50 p-10 rounded text-white ">
          <h2 className="text-4xl font-bold mb-4">
            One Platform for College Events <br /> & Placement Opportunities
          </h2>

          <div className="space-x-4 mt-6">
            <Link
              to={"/events"}
              className="bg-blue-600 px-6 py-3 rounded hover:bg-blue-700"
            >
              Explore Events
            </Link>

            <Link
              to={"/placements"}
              className="bg-white text-blue-600 px-6 py-3 rounded hover:bg-gray-200"
            >
              View Placement Drives
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto py-12 px-4">
        <h2 className="text-2xl font-bold mb-6">Upcoming College Events</h2>

        <div className="grid md:grid-cols-4 gap-6">
          <div className="bg-white rounded shadow">
            <img
              src="ai.png"
              className="rounded-t h-40 w-full object-cover"
              coding="lazy"
            />

            <div className="p-4">
              <h3 className="font-semibold text-lg">AI Hackathon</h3>
              <p className="text-gray-500 text-sm">March 12 | 9:00 AM</p>

              <button className="mt-3 bg-blue-600 text-white px-4 py-2 rounded w-full">
                Register
              </button>
            </div>
          </div>

          <div className="bg-white rounded shadow">
            <img
              src="music.png"
              className="rounded-t h-40 w-full object-cover"
              coding="lazy"
            />

            <div className="p-4">
              <h3 className="font-semibold text-lg">Music Fest Night</h3>
              <p className="text-gray-500 text-sm">March 18 | 6:00 PM</p>

              <button className="mt-3 bg-orange-500 text-white px-4 py-2 rounded w-full">
                Register
              </button>
            </div>
          </div>

          <div className="bg-white rounded shadow">
            <img
              src="robo.png"
              className="rounded-t h-40 w-full object-cover"
              coding="lazy"
            />

            <div className="p-4">
              <h3 className="font-semibold text-lg">Robotics Workshop</h3>
              <p className="text-gray-500 text-sm">April 20 | 10:00 AM</p>

              <button className="mt-3 bg-yellow-500 text-white px-4 py-2 rounded w-full">
                Register
              </button>
            </div>
          </div>

          <div className="bg-white rounded shadow">
            <img
              src="sport.png"
              className="rounded-t h-40 w-full object-cover"
              coding="lazy"
            />

            <div className="p-4">
              <h3 className="font-semibold text-lg">Sports Tournament</h3>
              <p className="text-gray-500 text-sm">April 25 | 8:00 AM</p>

              <button className="mt-3 bg-green-600 text-white px-4 py-2 rounded w-full">
                Register
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto py-12 px-4">
        <h2 className="text-2xl font-bold mb-6">Latest Placement Drives</h2>

        <div className="grid md:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded shadow text-center">
            <h3 className="text-xl font-bold text-blue-600">Infosys</h3>
            <p className="text-gray-600">Software Engineer</p>
            <p className="text-gray-500">6 LPA</p>

            <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded w-full">
              Apply Now
            </button>
          </div>

          <div className="bg-white p-6 rounded shadow text-center">
            <h3 className="text-xl font-bold text-red-500">TCS</h3>
            <p className="text-gray-600">Data Analyst</p>
            <p className="text-gray-500">5 LPA</p>

            <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded w-full">
              Apply Now
            </button>
          </div>

          <div className="bg-white p-6 rounded shadow text-center">
            <h3 className="text-xl font-bold text-blue-500">Google</h3>
            <p className="text-gray-600">Internship</p>
            <p className="text-gray-500">20K / Month</p>

            <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded w-full">
              Apply Now
            </button>
          </div>

          <div className="bg-white p-6 rounded shadow text-center">
            <h3 className="text-xl font-bold">Deloitte</h3>
            <p className="text-gray-600">Marketing Associate</p>
            <p className="text-gray-500">4.5 LPA</p>

            <button className="mt-4 bg-blue-700 text-white px-4 py-2 rounded w-full">
              Apply Now
            </button>
          </div>
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 text-center gap-6">
          <div>
            <h3 className="text-3xl font-bold text-blue-600">180+</h3>
            <p className="text-gray-600">Events Conducted</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-orange-500">35+</h3>
            <p className="text-gray-600">Companies Visited</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-green-600">5000+</h3>
            <p className="text-gray-600">Student Registrations</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-blue-700">120+</h3>
            <p className="text-gray-600">Job Offers</p>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-6">
        <div className="max-w-7xl mx-auto text-center space-y-2">
          <p>© 2026 CampusConnect. All Rights Reserved</p>

          <div className="space-x-4 text-gray-400">
            <a href="#">About</a>
            <a href="#">Contact</a>
            <a href="#">Privacy Policy</a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Home;
