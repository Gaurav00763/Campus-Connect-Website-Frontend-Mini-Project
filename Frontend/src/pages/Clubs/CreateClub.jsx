import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createClub } from "../../services/clubService";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

function CreateClub() {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const [clubData, setClubData] = useState({
    name: "",
    description: "",
  });

  const handleChange = e => {
    setClubData({
      ...clubData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      let d = await createClub(clubData, user._id);
      alert("Club created successfully");
      navigate("/clubs");
    } catch (error) {
      console.log(error);
      alert("Error creating club");
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 shadow-lg rounded-lg bg-white">
      <h2 className="text-2xl font-bold mb-6">Create Club</h2>

      <form method="post" onSubmit={handleSubmit} className="space-y-4">
        {/* Club Name */}
        <div>
          <label className="block mb-1 font-semibold">Club Name</label>
          <input
            type="text"
            name="name"
            value={clubData.name}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />
        </div>

        {/* Description */}
        <div>
          <label className="block mb-1 font-semibold">Description</label>
          <textarea
            name="description"
            value={clubData.description}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Create Club
        </button>
      </form>
    </div>
  );
}

export default CreateClub;
