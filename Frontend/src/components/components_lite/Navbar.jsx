import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { LogOut, User2 } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";
import axios from "axios";
import { setUser } from "@/redux/authSlice";
import { USER_API_ENDPOINT } from "@/utils/data";

const Navbar = () => {
  const { user } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = async () => {
    try {
      const res = await axios.post(`${USER_API_ENDPOINT}/logout`, {
        withCredentials: true,
      });
      if (res?.data?.success) {
        dispatch(setUser(null));
        navigate("/");
        toast.success(res.data.message);
      } else {
        console.error("Error logging out:", res.data);
      }
    } catch (error) {
      console.error("Axios error:", error);
      toast.error("Error logging out. Please try again.");
    }
  };

  return (
    <div className="bg-white shadow-md sticky top-0 z-50 backdrop-blur-md bg-opacity-90">
      <div className="flex items-center justify-between mx-auto max-w-7xl px-6 h-16">
        
        {/* Logo Section */}
        <div
          className="flex items-center gap-2 cursor-pointer select-none"
          onClick={() => navigate("/")}
        >
          <div className="flex items-center justify-center bg-gradient-to-r from-[#6B3AC2] to-[#3B82F6] text-white font-bold text-xl w-10 h-10 rounded-lg shadow-md">
            AI
          </div>
          <h1 className="text-2xl font-bold text-gray-800 tracking-wide">
            Hire<span className="text-[#6B3AC2]">.</span>
          </h1>
        </div>

        {/* Navigation Links */}
        <div className="flex items-center gap-10">
          <ul className="flex font-medium items-center gap-6 text-gray-700">
            {user && user.role === "Recruiter" ? (
              <>
                <li><Link to="/admin/companies" className="hover:text-[#6B3AC2] transition">Companies</Link></li>
                <li><Link to="/admin/jobs" className="hover:text-[#6B3AC2] transition">Jobs</Link></li>
              </>
            ) : (
              <>
                <li><Link to="/Home" className="hover:text-[#6B3AC2] transition">Home</Link></li>
                <li><Link to="/Browse" className="hover:text-[#6B3AC2] transition">Browse</Link></li>
                <li><Link to="/Jobs" className="hover:text-[#6B3AC2] transition">Jobs</Link></li>
                <li><Link to="/Creator" className="hover:text-[#6B3AC2] transition">About</Link></li>
              </>
            )}
          </ul>

          {/* Auth Buttons */}
          {!user ? (
            <div className="flex items-center gap-3">
              {/* Login Button (always visible) */}
              <Link to="/login">
                <Button
                  className="border-2 border-[#6B3AC2] text-[#6B3AC2] bg-transparent hover:bg-[#6B3AC2] hover:text-white transition-all duration-300 font-medium"
                >
                  Login
                </Button>
              </Link>

              {/* Register Button */}
              <Link to="/register">
                <Button
                  className="bg-gradient-to-r from-[#6B3AC2] to-[#3B82F6] text-white hover:opacity-90 transition-all duration-300 font-medium"
                >
                  Register
                </Button>
              </Link>
            </div>
          ) : (
            <Popover>
              <PopoverTrigger asChild>
                <Avatar className="cursor-pointer border border-gray-300 shadow-sm hover:scale-105 transition">
                  <AvatarImage src={user?.profile?.profilePhoto} alt="@user" />
                </Avatar>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <div className="flex items-center gap-4 mb-3">
                  <Avatar>
                    <AvatarImage src={user?.profile?.profilePhoto} alt="@user" />
                  </Avatar>
                  <div>
                    <h3 className="font-medium text-gray-800">{user?.fullname}</h3>
                    <p className="text-sm text-gray-500">{user?.profile?.bio}</p>
                  </div>
                </div>

                <div className="flex flex-col space-y-2 text-gray-700">
                  {user && user.role === "Student" && (
                    <div className="flex items-center gap-2 cursor-pointer hover:text-[#6B3AC2] transition">
                      <User2 size={18} />
                      <Button variant="link">
                        <Link to="/Profile">Profile</Link>
                      </Button>
                    </div>
                  )}
                  <div className="flex items-center gap-2 cursor-pointer hover:text-[#6B3AC2] transition">
                    <LogOut size={18} />
                    <Button onClick={logoutHandler} variant="link">
                      Logout
                    </Button>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
