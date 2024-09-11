import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Login = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState("student");
  function handleSubmit(e) {
    e.preventDefault();
    navigate(`/${role}`);
    // const username = e.target.username.value;
    // const password = e.target.password.value;
    // console.log(username, password);
    // // checkLogin(username, password);
    // e.target.username.value = "";
    // e.target.password.value = "";
  }
  return (
    <>
      <div className="bg-[#e4dcdca5] tracking-wide w-full h-screen  flex  justify-center items-center select-none ">
        <div className="w-full bg-white max-w-md p-6  rounded-lg shadow-[0_7px_6px_rgba(0,0,0,0.2)] ">
          <h1 className="text-2xl tracking-normal font-bold mb-5 w-full  text-center">
            Welcome to the Online <br></br> Examination System
          </h1>
          {/* <h2 className="text-xl font-bold mb-4">Login</h2> */}
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                className="block tracking-[-0.15px] text-sm  mb-2"
                htmlFor="username"
              >
                Username:
              </label>
              <input
                className=" appearance-none border shadow-md caret-blue-500 w-full py-2 px-3 text-gray-700 outline-blue "
                id="username"
                type="text"
              />
            </div>
            <div className="mb-4">
              <label
                className="block tracking-[-0.15px] text-sm  mb-2"
                htmlFor="password"
              >
                Password:
              </label>
              <input
                className=" appearance-none border shadow-md caret-blue-500 w-full py-2 px-3 text-gray-700 outline-blue "
                id="password"
                type="password"
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
            <input
              type="submit"
              className="w-full text-white hover:bg-blue-700 cursor-pointer bg-blue-500 px-4  mt-2 py-2 "
              value="Login"
            />

            <div className="text-[13px] tracking-tight w-full  mt-2 ">
              <span>Don&apos;t have an account?</span>
              <Link className="ml-1 text-blue-800 underline " to="/register">
                Register here
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
