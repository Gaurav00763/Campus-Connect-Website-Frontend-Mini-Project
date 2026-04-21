import { Link } from "react-router-dom";

const EventCard = ({ event }) => {
  const now = new Date();
  const startDate = new Date(event.startDate).toLocaleString("en-IN", {
    day: "2-digit",
    month: "long",
    year: "numeric",
    timeZone: "Asia/Kolkata",
  });
  const endDate = new Date(event.endDate).toLocaleString("en-IN", {
    day: "2-digit",
    month: "long",
    year: "numeric",
    timeZone: "Asia/Kolkata",
  });
  return (
    <div className="bg-white flex flex-col justify-between rounded-xl shadow-md p-5 hover:shadow-xl transition col-span-4">
      <h2 className="text-xl font-bold mb-2">{event.title}</h2>

      <p className="text-gray-600 mb-2">{event.description}</p>

      <p className="text-sm text-gray-500">
        Date:{" "}
        {startDate === endDate ? (
          startDate
        ) : (
          <>
            {startDate} to {endDate}
          </>
        )}
      </p>
      <p className="text-sm mt-2 text-gray-500">
        Time: {event.startTime} to {event.endTime}
      </p>
      <div className="mt-2 flex gap-2">
        {event.tags.map(tag => {
          return (
            <span className="bg-gray-300 text-sm px-2 py-1 rounded-md ">
              {tag.toUpperCase()}
            </span>
          );
        })}
      </div>
      <div className="mt-2">
        <span className="bg-blue-500 text-white rounded-md px-2 py-1">
          Seats Left: {event.maxAttendees - event.attendees.length}
        </span>
      </div>
      <div className="flex gap-3 mt-2">
        <Link
          to={`/events/${event._id}`}
          className="bg-green-500 text-white px-4 py-1 rounded"
        >
          View
        </Link>
      </div>
    </div>
  );
};

export default EventCard;
