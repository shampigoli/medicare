import React, { useState } from "react";
import "./../styles/Login.css";
import {Link} from 'react-router-dom'
const Login = () => {
  const [fromData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleInputChange = (e) => {
    setFormData({ ...fromData, [e.target.name]: e.target.value });
  };
  return (
    <>
    <section>
    <div className="px-5 overflow-x-hidden lg:px-0 login">
      <div className="w-full max-w-[570px] mx-auto mb-5 pb-0 rounded-lg shadow-panelShadow p-5 md:p-10 mt-5 overflow-x-hidden">
        <h3 className="text-headingColor lg:text-[22px] text-[18px] leading-9 font-bold mb-10">
          Hello &nbsp;
          <span className="text-primaryColor">Welcome</span>&nbsp; Back 🎉
        </h3>
        <form className="py-4">
          <div className="mb-3">
            <input
              type="email"
              placeholder="Enter your email..."
              name="email"
              value={FormData.email}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-textColor placeholder:text-textColor leading-7 text-[16px] rounded-md cursor-pointer shadow-panelShadow"
              required
            />
            <input
              type="password"
              placeholder="Enter your password..."
              name="password"
              value={FormData.password}
              onChange={handleInputChange}
              className="w-full px-3 mt-4 py-2 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-textColor placeholder:text-textColor leading-7 text-[16px] rounded-md cursor-pointer shadow-panelShadow"
              required
            />
            <div className="mt-0">
              <button className="btn rounded-lg w-full" type="submit">Login</button>
            </div>
            <p className="mt-3 text-center font-[600]">Don&apos;t have an account? <Link to='/register' className="text-primaryColor">Register</Link></p>
          </div>
        </form>
      </div>
    </div>
    </section>
    </>
  );
};

export default Login;
