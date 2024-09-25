import { Link } from "react-router-dom";
import image from "../assets/logintheme.jpg";
import logo from "../assets/logo.png";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
function SignIn() {
  return (
    <div className="main-container w-full h-screen bg-blue-300 flex items-center justify-center overflow-hidden">
      <div className=" sub-container w-[93%] h-[90%] md:w-[80%] md:h-[80%] rounded-md shadow-xl bg-gray-200 grid grid-cols-2">
        <div className="Form p-5">
          <div className="head">
            <Link to="/" className="flex items-center justify-start gap-5">
              <img className="w-14" src={logo} alt="logo" />
              <h1 className=" font-head font-semibold text-4xl text-gray-700 ">
                BlogBox
              </h1>
            </Link>
          </div>
          <div className="form w-full">
            <div className="form-title">
              <p>Start you journey</p>
              <h1>Sign Up to BlogBox</h1>
            </div>
            <form action="/">
              <Box
                component="form"
                sx={{ "& > :not(style)": { m: 1, width: "25ch" } }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                />
              </Box>
            </form>
          </div>
        </div>
        <div className="img"></div>
      </div>
    </div>
  );
}

export default SignIn;
