import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import {
  updatePlacementRegister,
  isRegister,
} from "../services/placementService";

const PlacementCard = ({ drive }) => {
  const { user } = useContext(AuthContext);
  const [open, setOpen] = useState(false);
  const [companyId, setCompanyId] = useState("");
  const [registered, setRegistered] = useState(false);
  const normalTime = new Date(drive.date).toLocaleString("en-IN", {
    day: "2-digit",
    month: "long",
    year: "numeric",
    timeZone: "Asia/Kolkata",
  });
  const checkRegistration = async () => {
    let res = await isRegister(drive._id);
    setRegistered(res.data.registered);
  };
  if (user && user.role === "student") {
    checkRegistration();
  }
  const applyCompany = async () => {
    try {
      let res = await updatePlacementRegister(companyId, user._id);
      setOpen(false);
      setRegistered(true);
      alert(res.data.message);
    } catch (err) {
      console.log(err);
      alert("Application failed");
    }
  };
  return (
    <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg">
      <h2 className="text-xl font-bold">{drive.company}</h2>

      <p className="text-gray-600 mt-1">{drive.description}</p>
      <p className=" mt-1">
        Role: <span className="text-gray-600">{drive.role}</span>
      </p>

      <p className="mt-1">
        Date: <span className="text-gray-600">📅{normalTime}</span>
      </p>

      <p className="">
        Min CGPA:{" "}
        <span className="text-gray-600 ">{drive.eligibility?.minCGPA}</span>
      </p>
      <p className="">
        Branch:{" "}
        {drive.eligibility?.branches.map(branch => {
          return <span className="text-gray-500">{branch} </span>;
        })}
      </p>
      <div className=" flex gap-2">
        Year:{" "}
        {drive.eligibility?.year.map(year => {
          return (
            <span className="text-gray-500 px-1 bg-gray-200 rounded-lg">
              {year}{" "}
            </span>
          );
        })}
      </div>
      <div className="flex gap-2 mt-2">
        {drive.eligibility?.skills.map(element => {
          return (
            <span className="px-2 py-1 text-white bg-blue-500 rounded-lg">
              {element}
            </span>
          );
        })}
      </div>

      <div className="flex gap-3 mt-4">
        {user
        && user.role === "student"
        && user.cgpa >= drive.eligibility?.minCGPA ? (
          registered ? (
            <span className="bg-green-700 text-white px-4 py-1 rounded">
              Already Applied
            </span>
          ) : (
            <button
              onClick={() => {
                setOpen(true);
                setCompanyId(drive._id);
              }}
              className="bg-green-500 text-white px-4 py-1 rounded"
            >
              Eligible
            </button>
          )
        ) : (
          <span className="bg-red-500 text-white px-4 py-1 rounded">
            Not Eligible
          </span>
        )}
      </div>
      {open && (
        <div className="fixed inset-0 backdrop-blur-sm bg-opacity-40 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg w-96 text-center">
            <h2 className="text-xl font-bold mb-4">
              Applying for this Company
            </h2>

            <p className="text-gray-600 mb-6">
              Your account detail will be used for apply.
            </p>

            <div className="flex justify-center gap-4">
              <button
                onClick={() => setOpen(false)}
                className="px-4 py-2 border rounded"
              >
                Cancel
              </button>

              <button
                onClick={applyCompany}
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
};

export default PlacementCard;
