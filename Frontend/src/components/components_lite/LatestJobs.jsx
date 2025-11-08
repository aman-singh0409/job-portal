import React from "react";
import JobCards from "./JobCards";
import { useSelector } from "react-redux";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";
import { Briefcase } from "lucide-react";

const LatestJobs = () => {
  const allJobs = useSelector((state) => state.jobs?.allJobs || []);
  const navigate = useNavigate();

  return (
    <div className="max-w-7xl mx-auto my-20 px-6">
      {/* Header */}
      <div className="flex flex-col items-center text-center mb-10">
        <div className="flex items-center gap-2 text-[#6B3AC2] bg-[#F3E8FF] px-4 py-2 rounded-full font-semibold">
          <Briefcase size={18} />
          <span>AI Hire — Smart Job Matching</span>
        </div>

        <h2 className="mt-4 text-4xl md:text-5xl font-bold text-gray-800">
          Explore <span className="text-[#6B3AC2]">Top & Latest</span> Jobs
        </h2>

        <p className="mt-2 text-gray-600 max-w-2xl">
          Get AI-recommended jobs that match your profile, skills, and interests.
          Start exploring new opportunities today.
        </p>
      </div>

      {/* Job Cards */}
      <div
        className={`grid gap-6 ${
          allJobs.length <= 1
            ? "grid-cols-1"
            : allJobs.length === 2
            ? "grid-cols-1 md:grid-cols-2"
            : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        }`}
      >
        {allJobs.length === 0 ? (
          <div className="col-span-full text-center py-12 text-gray-500 text-lg">
            No job openings available right now.
          </div>
        ) : (
          allJobs.slice(0, 6).map((job) =>
            job?._id ? (
              <div
                key={job._id}
                className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              >
                <JobCards job={job} />
              </div>
            ) : (
              <span key={Math.random()}>Invalid Job Data</span>
            )
          )
        )}
      </div>

      {/* View All Button */}
      {allJobs.length > 6 && (
        <div className="flex justify-center mt-10">
          <Button
            onClick={() => navigate("/browse")}
            className="bg-[#6B3AC2] hover:bg-[#5930A5] text-white px-8 py-2 rounded-full font-semibold transition-all"
          >
            View All Jobs
          </Button>
        </div>
      )}
    </div>
  );
};

export default LatestJobs;
