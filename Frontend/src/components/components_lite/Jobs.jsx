import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import FilterCard from "./Filtercard";
import Job1 from "./Job1";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { SearchX } from "lucide-react";

const Jobs = () => {
  const { allJobs, searchedQuery } = useSelector((store) => store.job);
  const [filteredJobs, setFilteredJobs] = useState(allJobs);

  useEffect(() => {
    if (!searchedQuery || searchedQuery.trim() === "") {
      setFilteredJobs(allJobs);
      return;
    }

    const query = searchedQuery.toLowerCase();

    const matchedJobs = allJobs.filter((job) =>
      [job.title, job.description, job.location, job.experience, job.salary]
        .filter(Boolean)
        .some((field) => field.toLowerCase().includes(query))
    );

    setFilteredJobs(matchedJobs);
  }, [allJobs, searchedQuery]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8f8ff] to-[#f3f1fc]">
      <Navbar />

      {/* Page Header */}
      <div className="text-center mt-10">
        <h1 className="text-4xl font-bold text-gray-800">
          Explore <span className="text-[#6B3AC2]">Exciting Jobs</span>
        </h1>
        <p className="text-gray-500 mt-2">
          Discover AI-powered opportunities that match your career goals.
        </p>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto mt-10 px-4 pb-10">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filter Section */}
          <div className="w-full lg:w-1/4">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <FilterCard />
            </motion.div>
          </div>

          {/* Job List Section */}
          <div className="flex-1">
            {filteredJobs.length <= 0 ? (
              <div className="flex flex-col items-center justify-center h-[70vh] text-center">
                <SearchX className="w-12 h-12 text-gray-400 mb-3" />
                <h2 className="text-xl font-semibold text-gray-700">
                  No jobs found
                </h2>
                <p className="text-gray-500 text-sm mt-1">
                  Try adjusting your filters or searching for something else.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredJobs.map((job) => (
                  <motion.div
                    key={job._id || job.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Job1 job={job} />
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
