import { TextField, Checkbox, Button } from "@mui/material";
import { Link } from "react-router-dom";
import image from "../assets/logo.png";

const SignInPage = () => {
  return (
    <div className="flex h-screen bg-purple-600">
      <div className="md:m-auto m-5 bg-white md:w-[90%] md:h-[90%] md:grid grid-cols-2 rounded-lg shadow-xl overflow-hidden">
        <div className="  flex flex-col w-full h-full items-start justify-between px-10 py-20 md:p-20">
          <Link className="mb-8 flex items-center justify-start gap-2">
            <img className=" w-12" src={image} alt="logo" />
            <h1 className="text-5xl font-bold text-gray-700">BlogBox</h1>
          </Link>
          <div className="form">
            <div className="form-head">
              <p className=" text-xl text-gray-400">Welcome back...</p>
              <h2 className="text-4xl font-bold text-blue-600 mb-6">
                Sign In to BlogBox
              </h2>
            </div>
            <form className="space-y-6 flex-1">
              <TextField
                fullWidth
                label="Email address"
                variant="outlined"
                placeholder="name@mail.com"
              />
              <TextField
                fullWidth
                label="Password"
                type="password"
                variant="outlined"
              />
              <div className=" google-auth w-full flex flex-col items-center justify-between gap-3">
                <p className=" text-gray-500">or sign in with</p>
                <button className=" p-3 bg-gray-300 w-full flex justify-center hover:bg-pink-400 rounded-md">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    version="1.1"
                    x="0px"
                    y="0px"
                    viewBox="0 0 48 48"
                    enableBackground="new 0 0 48 48"
                    height="2em"
                    width="2em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="#FFC107"
                      d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12
	c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24
	c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                    ></path>
                    <path
                      fill="#FF3D00"
                      d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657
	C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                    ></path>
                    <path
                      fill="#4CAF50"
                      d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36
	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                    ></path>
                    <path
                      fill="#1976D2"
                      d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571
	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                    ></path>
                  </svg>
                </button>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Checkbox color="primary" />
                  <span className="ml-2 text-sm text-gray-600">
                    Remember me
                  </span>
                </div>
                <a href="#" className="text-sm text-blue-600 hover:underline">
                  Forgot password?
                </a>
              </div>
              <div className="space-y-3">
                <Button
                  variant="contained"
                  fullWidth
                  className="bg-pink-500 hover:bg-pink-600"
                >
                  Login
                </Button>
                <Button
                  variant="outlined"
                  fullWidth
                  className="text-blue-600 border-blue-600"
                >
                  Sign up
                </Button>
              </div>
            </form>
          </div>
        </div>
        <div className=" hidden md:flex bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500">
          {/* This div creates the colorful background */}
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
