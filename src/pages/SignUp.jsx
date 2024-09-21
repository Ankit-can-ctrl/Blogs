import logo from "../assets/logo.png";
import image from "../assets/logintheme.jpg";

function SignUp() {
  return (
    <div className="main-container flex items-center justify-center w-full h-screen bg-blue-200">
      <div className=" grid grid-cols-2 mx-10 rounded-md overflow-hidden bg-white">
        <div
          className="login px-20 py-10
         flex flex-col gap-10"
        >
          <div className="header flex items-center justify-start gap-2">
            <img className=" w-[50px]" src={logo} alt="logo" />
            <h1 className="title font-sec font-bold text-3xl text-gray-700">
              BlogBox
            </h1>
          </div>
          <div className="form pl-10 font-sec mt-10  flex flex-col gap-3 items-start justify-center h-[70%]">
            <h3 className=" text-md text-gray-400">Start your blog journey</h3>
            <h2 className=" font-semibold text-gray-700 text-3xl">
              Sign Up to BlogBox
            </h2>
            <form action="/" className=" flex mt-5 flex-col gap-3">
              <label
                htmlFor="email"
                className=" text-xl text-gray-500 font-semibold"
              >
                E-mail
              </label>
              <input
                type="email"
                className=" p-4 text-md outline-none rounded-sm min-h-12 bg-gray-200 min-w-[400px] font-semibold text-gray-700"
                id="email"
                placeholder="example@gmail.com"
              />
              <label
                htmlFor="pass"
                className=" text-xl text-gray-500 font-semibold"
              >
                Password
              </label>
              <input
                type="password"
                className=" p-4 text-md outline-none rounded-sm min-h-12 bg-gray-200 min-w-[400px] font-semibold text-gray-700"
                id="pass"
                placeholder="Password"
              />
              <button
                type="submit"
                className=" bg-blue-400 mt-2 text-xl p-4 rounded-sm text-white font-semibold hover:bg-blue-600 hover:text-white"
              >
                Sign Up
              </button>
            </form>
          </div>
          <div className="form-footer pl-10 font-semibold text-gray-500 flex">
            <p>Have an account? </p>
            <a href="/signin" className=" text-blue-700 underline">
              Sign In
            </a>
          </div>
        </div>
        <div className="img">
          <img className=" h-full" src={image} alt="login page" />
        </div>
      </div>
    </div>
  );
}

export default SignUp;
