import React, { useState } from "react";
import { createEvent } from "../../services/eventService";
import { useParams } from "react-router-dom";

const CreateEvent = () => {
  const { clubId } = useParams();
  const [eventData, setEventData] = useState({
    title: "",
    category: "",
    startDate: "",
    endDate: "",
    startTime: "",
    endTime: "",
    description: "",
    tags: "",
    maxAttendees: "",
  });

  const handleChange = e => {
    setEventData({
      ...eventData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    const formattedData = {
      ...eventData,
      tags: eventData.tags.split(","), // convert string → array
      maxAttendees: Number(eventData.maxAttendees),
    };
    console.log(formattedData);

    try {
      const res = await createEvent(formattedData, clubId);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 bg-white p-6 shadow-lg rounded-xl">
      <h2 className="text-2xl font-bold mb-6 text-center">Create Event</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Title */}
        <input
          type="text"
          name="title"
          placeholder="Event Title"
          value={eventData.title}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />

        {/* Category */}
        <select
          name="category"
          value={eventData.category}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        >
          <option value="">Select Category</option>
          <option value="academic">Academic</option>
          <option value="cultural">Cultural</option>
          <option value="sports">Sports</option>
          <option value="career">Career</option>
        </select>

        {/* Start Date */}
        <input
          type="date"
          name="startDate"
          value={eventData.startDate}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
        {/* End Date */}
        <input
          type="date"
          name="endDate"
          value={eventData.endDate}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
        {/* Start Time */}
        <input
          type="text"
          name="startTime"
          placeholder="Time (9:00 Am)"
          value={eventData.startTime}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
        {/* End Time */}
        <input
          type="text"
          name="endTime"
          placeholder="Time (9:00 Am)"
          value={eventData.endTime}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
        {/* Description */}
        <textarea
          name="description"
          placeholder="Event Description"
          value={eventData.description}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />

        {/* Tags */}
        <input
          type="text"
          name="tags"
          placeholder="Tags (comma separated)"
          value={eventData.tags}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />

        {/* Max Attendees */}
        <input
          type="number"
          name="maxAttendees"
          placeholder="Max Attendees"
          value={eventData.maxAttendees}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        >
          Create Event
        </button>
      </form>
    </div>
  );
};

export default CreateEvent;
