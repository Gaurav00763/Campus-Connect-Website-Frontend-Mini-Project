import { useState } from "react";
import { registerUser } from "../../services/authService";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const Register = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "student",
    branch: "",
    year: "",
    cgpa: "",
    skills: "",
    interests: "",
  });

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    const formattedData = {
      ...formData,
      year: Number(formData.year),
      cgpa: Number(formData.cgpa),
      skills: formData.skills.split(",").map(s => s.trim()),
      interests: formData.interests.split(",").map(i => i.trim()),
    };

    try {
      let res = await registerUser(formattedData);
      setUser(res.data.user);
      alert("User Registered Successfully");
      navigate("/");
    } catch (err) {
      alert("User already exist");
    }
  };

  return (
    <div className="flex justify-center items-center  bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-md w-150 grid grid-cols-2 gap-2"
      >
        <h2 className="text-3xl font-bold text-center  text-gray-800 col-span-2">
          Register
        </h2>

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          onChange={handleChange}
          className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 col-span-2 "
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 col-span-2"
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 col-span-1"
          required
        />

        {/* Branch */}

        <input
          type="text"
          name="branch"
          placeholder="Branch (CSE, ECE...)"
          onChange={handleChange}
          className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 "
        />

        {/* Year */}

        <input
          type="number"
          name="year"
          placeholder="Year"
          onChange={handleChange}
          className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* CGPA */}

        <input
          type="number"
          step="0.01"
          name="cgpa"
          placeholder="CGPA"
          onChange={handleChange}
          className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Skills */}

        <input
          type="text"
          name="skills"
          placeholder="Skills (comma separated)"
          onChange={handleChange}
          className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 col-span-2"
        />

        {/* Interests */}

        <input
          type="text"
          name="interests"
          placeholder="Interests (comma separated)"
          onChange={handleChange}
          className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 col-span-2"
        />

        <button className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 col-span-2">
          Register
        </button>
        <p className="text-center text-sm text-gray-600 mt-4 col-span-2">
          Already have an account?{" "}
          <Link to={"/login"} className="text-blue-600 hover:underline">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
