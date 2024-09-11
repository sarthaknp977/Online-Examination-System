import { Link } from "react-router-dom";
import { useState } from "react";

const Register = () => {
  const [role, setRole] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const username = e.target.regUsername.value;
    const password = e.target.regPassword.value;
    console.log(username, password, role);

    e.target.regUsername.value = "";
    e.target.regPassword.value = "";
  }

  return (
    <>
      <div className="bg-[#e4dcdca5] tracking-wide w-full h-screen flex justify-center items-center select-none">
        <div className="w-full bg-white max-w-md p-6 rounded-lg shadow-[0_7px_6px_rgba(0,0,0,0.2)]">
          <h1 className="text-2xl tracking-normal font-bold mb-5 w-full text-center">
            Register for the Online <br /> Examination System
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                className="block tracking-[-0.15px] text-sm mb-2"
                htmlFor="regUsername"
              >
                Username:
              </label>
              <input
                className="appearance-none border shadow-md caret-blue-500 w-full py-2 px-3 text-gray-700 outline-blue"
                id="regUsername"
                type="text"
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block tracking-[-0.15px] text-sm mb-2"
                htmlFor="regPassword"
              >
                Password:
              </label>
              <input
                className="appearance-none border shadow-md caret-blue-500 w-full py-2 px-3 text-gray-700 outline-blue"
                id="regPassword"
                type="password"
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block tracking-[-0.15px] text-sm mb-2"
                htmlFor="role"
              >
                Role:
              </label>
              <select
                id="role"
                className=" border shadow-md caret-blue-500 w-full py-2 px-3 text-gray-700 outline-blue"
                value={role}
                onChange={(e) => setRole(e.target.value)}
              >
                <option value="student">Student</option>
                <option value="teacher">Teacher</option>
                <option value="admin">Admin</option>
              </select>
            </div>
            <button
              type="submit"
              className="w-full text-white hover:bg-blue-700 cursor-pointer bg-blue-500 px-4 mt-2 py-2"
            >
              Register
            </button>
            <div className="text-[13px] tracking-tight w-full mt-2">
              <span>Already have an account?</span>
              <Link className="ml-1 text-blue-800 underline" to="/login">
                Login here
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
