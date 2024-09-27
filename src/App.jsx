import { Route, Routes, Outlet } from "react-router-dom";

import {
  BlogDetails,
  CategoriesPage,
  Home,
  SignUp,
  SignIn,
  Writerpage,
} from "./pages/index";
import Loader from "./components/Loader";

function App() {
  const isLoading = false;
  const theme = "light";
  return (
    <main className={theme}>
      <div className=" w-full min-h-screen relative bg-white dark:bg-[#020b19]">
        {isLoading ? (
          <Loader />
        ) : (
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/category" element={<CategoriesPage />} />
              <Route path="/:slug/:id?" element={<BlogDetails />} />
              <Route path="/writer/:id" element={<Writerpage />} />
            </Route>
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/sign-in" element={<SignIn />} />
          </Routes>
        )}
      </div>
    </main>
  );
}

export default App;

function Layout() {
  return (
    <div className=" flex flex-col min-h-screen w-full">
      {/* <Navbar/> */}
      <div className=" flex-1">
        <Outlet />
      </div>
      {/* <Footer/> */}
    </div>
  );
}
