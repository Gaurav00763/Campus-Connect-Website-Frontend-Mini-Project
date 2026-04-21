import { useParams, Link, useNavigate } from "react-router-dom";
import {
  getEventById,
  updateEventRgister,
  isRegister,
} from "../../services/eventService";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

function EventDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [event, setEvent] = useState(null);
  const [registered, setRegistered] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    checkRegistration();
    fetchClub();
  }, []);
  const checkRegistration = async () => {
    let res = await isRegister(id);
    setRegistered(res.data.registered);
  };
  const fetchClub = async () => {
    const { data } = await getEventById(id);
    setEvent(data.data);
    if (user) {
      checkIsregister();
    }
  };

  const registerEvent = async () => {
    try {
      let res = await updateEventRgister(id, user._id);
      setOpen(false);
      setRegistered(true);
      fetchClub();
      alert(res.data.message);
    } catch (err) {
      console.log(err);
      alert("Registration failed");
    }
  };

  if (!event) {
    return <p className="text-center mt-10">Loading...</p>;
  }

  return (
    <div className=" bg-gray-100 py-10 px-6">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-xl overflow-hidden">
        {/* Event Image */}
        <img src={event.img} alt="event" className="w-full h-80 object-cover" />

        {/* Event Content */}
        <div className="p-8">
          {/* Title */}
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            {event.title}
          </h1>
          {/* Description */}
          <div className="mb-2">
            <p className="text-gray-600 leading-relaxed">{event.description}</p>
          </div>

          {/* Event Info */}
          <div className="grid md:grid-cols-2 gap-1 text-gray-700 mb-2">
            <p>
              <span className="font-semibold">Club:</span> {event.club}
            </p>

            <p>
              <span className="font-semibold">Date:</span>{" "}
              {event.startDate === event.endDate ? (
                event.startDate
              ) : (
                <>
                  {event.startDate} to {event.endDate}
                </>
              )}
            </p>

            <p>
              <span className="font-semibold">Time:</span> {event.startTime} to{" "}
              {event.endTime}
            </p>
          </div>
          <div className="flex gap-2">
            {event.tags.map(tag => {
              return (
                <span className="bg-gray-300 text-sm px-2 py-1 rounded-md ">
                  {tag.toUpperCase()}
                </span>
              );
            })}
          </div>
          <div className="my-3">
            <span className="bg-green-500 text-white rounded-md px-2 py-1">
              Seats Left: {event.maxAttendees - event.attendees.length}
            </span>
          </div>

          {/* Buttons */}
          <div className="flex gap-4">
            {event.maxAttendees == event.attendees.length ? (
              <span className="bg-sky-700 text-lg text-white px-6 py-2 rounded-lg transition">
                Seats Full
              </span>
            ) : registered ? (
              <button
                className="bg-sky-700 text-lg text-white px-6 py-2 rounded-lg transition"
                disabled
              >
                Already Registered
              </button>
            ) : (
              <button
                className="bg-sky-700 text-lg text-white px-6 py-2 rounded-lg transition"
                onClick={() => {
                  user ? setOpen(true) : navigate("/login");
                }}
              >
                Register
              </button>
            )}

            <Link
              to="/events"
              className="border border-gray-400 px-6 py-2 rounded-lg hover:bg-gray-200 transition"
            >
              Back
            </Link>
          </div>
        </div>
      </div>
      {open && (
        <div className="fixed inset-0 backdrop-blur-sm bg-opacity-40 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg w-96 text-center">
            <h2 className="text-xl font-bold mb-4">Register for this event?</h2>

            <p className="text-gray-600 mb-6">
              Your account will be used for registration.
            </p>

            <div className="flex justify-center gap-4">
              <button
                onClick={() => setOpen(false)}
                className="px-4 py-2 border rounded"
              >
                Cancel
              </button>

              <button
                onClick={registerEvent}
                className="bg-blue-600 text-white px-4 py-2 rounded"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default EventDetail;
