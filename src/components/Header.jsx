import { Link, NavLink } from "react-router-dom";
import pu_logo from "../assets/pu_logo.png";
import nh_logo from "../assets/nh_logo.jpg";
function Header() {
  return (
    <>
      {/* header */}
      <div className="flex justify-between bg-gradient-to-r from-red-800 via-red-600 to-red-800 w-full">
        <img src={pu_logo} alt="" width={150} className="rounded-lg" />

        <div className=" text-center font-sani text-white text-xl text py-2">
          <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-red-300 to-violet-100 text-8xl head  ">
            Newton House Hostel
          </h1>
          <h4 className="tracking-wide">Patna Science College, Patna University</h4>
          <h4 className="tracking-wide">Ashok Rajpath, Patna, 800005</h4>
        </div>

        <img src={nh_logo} alt="" width={140} className="rounded-lg" />
      </div>

      {/* navbar */}
      <div className="flex justify-between bg-gradient-to-r from-red-800 via-red-600 to-red-800 text-bases text-white nav py-2 px-10 border-2 ">
        <NavLink
          to=""
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-gray-950 scale-150 " : "hover:scale-150 hover:text-gray-950 trans "
          }
        >
          Home
        </NavLink>
            <h1>|</h1>
        <NavLink
          to="/Activities"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-gray-950 scale-150" : "hover:scale-150 hover:text-gray-950 trans"
          }
        >
          Activities
        </NavLink>
        <h1>|</h1>
        <NavLink
          to="/Alumni"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-gray-950 scale-150" : "hover:scale-150 hover:text-gray-950 trans"
          }
        >
          Alumni
        </NavLink>
        <h1>|</h1>
        <NavLink
          to="/About"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-gray-950 scale-150" : "hover:scale-150 hover:text-gray-950 trans"
          }
        >
          About
        </NavLink>
        <h1>|</h1>
        <NavLink
          to="/Supt"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-gray-950 scale-150" : "hover:scale-150 hover:text-gray-950 trans"
          }
        >
          Superintendent
        </NavLink>
        <h1>|</h1>
        <NavLink
          to="/Notice"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-yellow-200" : "text-yellow-200"
          }
        >
          !Notice!
        </NavLink>
      </div>
    </>
  );
}

export default Header;
