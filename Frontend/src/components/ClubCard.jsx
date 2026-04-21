import { Link } from "react-router-dom";

const ClubCard = ({ club }) => {
  return (
    <div className="bg-white shadow rounded-xl p-6 hover:shadow-lg col-span-4 ">
      <h2 className="text-xl font-semibold">{club.name}</h2>

      <p className="text-gray-600 mt-2">{club.description}</p>

      <div className="flex gap-3 mt-4">
        <Link
          to={`/clubs/${club._id}`}
          className="bg-blue-500 text-white px-4 py-1 rounded"
        >
          View
        </Link>
      </div>
    </div>
  );
};

export default ClubCard;
