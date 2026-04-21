import { useEffect, useState } from "react";
import { getEvents } from "../../services/eventService";
import EventCard from "../../components/EventCard";

function EventsList() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    getEvents().then(res => {
      setEvents(res.data.data);
    });
  }, []);

  return (
    <div className="grid grid-cols-8 gap-4">
      <h1 className="text-2xl font-bold col-span-8 mt-5">Events</h1>
      {events.map(event => (
        <EventCard key={event._id} event={event} />
      ))}
    </div>
  );
}

export default EventsList;
