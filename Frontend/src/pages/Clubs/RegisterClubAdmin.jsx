import { useState } from "react";
import { registerUser } from "../../services/authService";
import { Link, useNavigate } from "react-router-dom";

const RegisterClubAdmin = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "club",
    branch: "",
  });

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      let res = await registerUser(formData);
      console.log(res);
      alert("User Registered Successfully");
      navigate("/clubs");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex justify-center items-center mt-4 bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-md w-150 grid grid-cols-2 gap-2"
      >
        <h2 className="text-3xl font-bold text-center  text-gray-800 col-span-2">
          Register Club Admin
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

export default RegisterClubAdmin;
