import React, { useState } from "react";
import { Button } from "../ui/button";
import { Search, Sparkles } from "lucide-react";
import { PiBuildingOfficeBold } from "react-icons/pi";
import { useDispatch } from "react-redux";
import { setSearchedQuery } from "@/redux/jobSlice";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const searchjobHandler = () => {
    if (!query.trim()) return;
    dispatch(setSearchedQuery(query));
    navigate("/browse");
  };

  return (
    <header className="text-center py-16 px-6 bg-gradient-to-b from-indigo-50 via-white to-white relative overflow-hidden">
      {/* Floating AI Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-200/30 to-purple-200/30 blur-3xl opacity-50 -z-10"></div>

      {/* AI Badge */}
      <div className="flex justify-center mb-6">
        <div className="flex items-center gap-2 bg-indigo-100 text-indigo-700 font-semibold px-4 py-2 rounded-full shadow-sm border border-indigo-200 animate-pulse">
          <Sparkles className="w-4 h-4 text-indigo-600" />
          <span>AI-Powered No.1 Job Hunt Platform</span>
        </div>
      </div>

      {/* Heading */}
      <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-4 text-gray-900">
        Find, Apply & Get Hired <br />
        with <span className="text-indigo-600">AI Hire</span>
      </h1>

      {/* Subheading */}
      <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-8">
        Discover the power of AI to match your skills with top opportunities.
        Your dream job is just a few clicks away — smarter, faster, easier.
      </p>

      {/* Search Bar */}
      <div className="flex w-full max-w-xl shadow-md border border-gray-300 bg-white pl-5 rounded-full items-center gap-3 mx-auto transition-all hover:shadow-lg">
        <input
          type="text"
          onChange={(e) => setQuery(e.target.value)}
          placeholder="🔍 Search jobs, roles, or companies..."
          className="outline-none border-none w-full py-3 bg-transparent text-gray-700 placeholder-gray-400"
        />
        <Button
          onClick={searchjobHandler}
          className="rounded-r-full px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white transition-colors"
        >
          <Search className="h-5 w-5" />
        </Button>
      </div>

      {/* Tagline */}
      <div className="mt-10 flex justify-center items-center gap-2 text-gray-500 text-sm">
        <PiBuildingOfficeBold className="text-indigo-500" />
        <span>Trusted by 10,000+ companies & professionals worldwide</span>
      </div>
    </header>
  );
};

export default Header;
