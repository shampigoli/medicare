import React, { useState } from "react";
import sign from "../assets/images/signup.gif";
import avator from "../assets/images/avatar-icon.png";
import { Link } from "react-router-dom";
const Signup = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState("");
  const [fromData, setFormData] = useState({
    email: "",
    name: "",
    password: "",
    photo: selectedFile,
    gender: "",
    role: "patient",
  });
  const handleInputChange = (e) => {
    setFormData({ ...fromData, [e.target.name]: e.target.value });
  };
  const handleInputFileChange = async (e) => {
    const file = e.target.files[0];
    console.log(file);
  };
  const submitHandler = async (e) => {
    e.preventDefault();
  };
  return (
    <section className="px-5 lg:px-0">
      <div className="max-w-[1050px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* img box */}
          <div className="hidden lg:block bg-primaryColor rounded- l-lg">
            <img src={sign} alt="" className="w-full rounded- l-lg" />
          </div>
          {/* sign up form */}
          <div className="lg:pl-16 py-10">
            <h3 className="text-headingColor text-[18px] lg:text-[22px] leading-6 font-[600]">
              Create an <span className="text-primaryColor">account</span>
            </h3>
            <form onSubmit={submitHandler}>
              <div className="mt-4 flex flex-col gap-4">
                <input
                  type="name"
                  placeholder="Full name"
                  name="name"
                  value={fromData.name}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-textColor placeholder:text-textColor leading-8 text-[16px] cursor-pointer shadow-panelShadow"
                  required
                />
                <input
                  type="email"
                  placeholder="Enter your email..."
                  name="email"
                  value={fromData.email}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-textColor placeholder:text-textColor leading-7 text-[16px] cursor-pointer shadow-panelShadow"
                  required
                />
                <input
                  type="password"
                  placeholder="Enter your password..."
                  name="password"
                  value={fromData.password}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-textColor placeholder:text-textColor leading-7 text-[16px] cursor-pointer shadow-panelShadow"
                  required
                />
              </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 mt-4">
                <label
                  className="text-headingColor text-[14px]"
                  value={fromData.role}
                  onChange={handleInputChange}
                >
                  Are you a :
                </label>
                <select
                  className="bg-transparent rounded-[0px] focus:outline-none text-textColor"
                  name="role"
                >
                  <option value="patient" className="rounded-[0px]">
                    Patient
                  </option>
                  <option value="doctor" className="rounded-[0px]">
                    Doctor
                  </option>
                </select>
              </div>

              <div className="flex items-center gap-2 mt-4">
                <label
                  className="text-headingColor text-[14px]"
                  value={fromData.gender}
                  onChange={handleInputChange}
                >
                  Gender :
                  <select
                    className="bg-transparent rounded-[0px] focus:outline-none text-textColor"
                    name="gender"
                  >
                    <option value="" className="rounded-[0px]">
                      Select
                    </option>
                    <option value="male" className="rounded-[0px]">
                      Male
                    </option>
                    <option value="female" className="rounded-[0px]">
                      Female
                    </option>
                    <option value="gay" className="rounded-[0px]">
                      Gay
                    </option>
                  </select>
                </label>
              </div>
            </div>
            <div className="mt-4 rounded-full flex items-center gap-3">
              <figure className=" h-[50px] w-[50px] border-[2px] rounded-full border-[#0066ff61]">
                <img src={avator} alt="" className="w-full " />
              </figure>
              <div className="relative w-[130px] h-[50px]">
                <input
                  type="file"
                  name="photo"
                  id="customFile"
                  accept=".jpg,.png"
                  className="absolute top-0 left-0 cursor-pointer opacity-0 w-full h-full"
                  onChange={handleInputFileChange}
                />
                <label
                  htmlFor=""
                  className="absolute top-0 left-0 cursor-pointer flex items-center px-[0.75rem] text-[15px] leading-6 overflow-hidden bg-[#0066ff46] text-headingColor truncate font-semibold w-full h-full rounded-lg"
                >
                  Upload Photo
                </label>
              </div>
            </div>
            <div className="mt-0">
              <button className="btn rounded-lg w-full" type="submit">
                Register
              </button>
            </div>
            <p className="mt-3 text-center font-[600]">
              Already have an account?{" "}
              <Link to="/login" className="text-primaryColor">
                Login
              </Link>
            </p>
          </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
