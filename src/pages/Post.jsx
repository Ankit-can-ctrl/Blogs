import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

import { ChevronDown } from "lucide-react";
import XIcon from "@mui/icons-material/X";
import GitHubIcon from "@mui/icons-material/GitHub";
function Post() {
  return (
    <nav className="h-20 w-full flex items-center justify-between p-5 font-sec text-gray-900 py-10 border-b-gray-200 border-[.1px]">
      <div className="links flex items-center justify-center gap-5 text-xl font-bold">
        <Link>Blogs</Link>
        <Link className=" flex items-center justify-center">
          Categories{" "}
          <span>
            <ChevronDown />
          </span>
        </Link>

        <Link>Contact</Link>
      </div>
      <div className="logo flex items-center justify-center gap-5 font-bold text-2xl">
        <img className=" h-16" src={logo} alt="logo" />
        <h1>BlogBox</h1>
      </div>
      <div className="Social-links flex items-center justify-center gap-5">
        <Link>
          <XIcon fontSize="large" />
        </Link>
        <Link>
          <GitHubIcon fontSize="large" />
        </Link>
      </div>
    </nav>
  );
}

export default Post;
