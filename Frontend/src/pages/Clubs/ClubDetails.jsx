import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getClubById } from "../../services/clubService";
import EventCard from "../../components/EventCard";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const ClubDetail = () => {
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const [club, setClub] = useState(null);

  useEffect(() => {
    fetchClub();
  }, []);

  const fetchClub = async () => {
    const { data } = await getClubById(id);
    setClub(data.data);
  };

  if (!club) {
    return <p className="text-center mt-10">Loading...</p>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white shadow rounded-xl overflow-hidden">
        <img
          src={club.img}
          alt={club.name}
          className="w-full h-72 object-cover"
        />

        <div className="p-6">
          <h1 className="text-3xl font-bold mb-4">{club.name}</h1>

          <p className="text-gray-600 mb-4">{club.description}</p>

          {user && user.clubAdmin === club._id ? (
            <div className="mt-6 flex gap-2">
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Edit Club
              </button>
              <button
                to={`/events/${club._id}/create`}
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
              >
                Create Event
              </button>{" "}
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
      <h3 className="mt-5 text-2xl font-bold">My Events</h3>
      <div className="grid grid-cols-2 mt-3">
        {club.events.map(event => {
          return <EventCard key={event._id} event={event} />;
        })}
      </div>
    </div>
  );
};

export default ClubDetail;
