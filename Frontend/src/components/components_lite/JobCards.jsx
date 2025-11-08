import React from "react";
import { Badge } from "../ui/badge";
import { useNavigate } from "react-router-dom";
import { Briefcase, MapPin, IndianRupee, Users } from "lucide-react";

const JobCards = ({ job }) => {
  const navigate = useNavigate();

  if (!job) return null;

  return (
    <div
      onClick={() => navigate(`/description/${job._id}`)}
      className="group p-6 rounded-xl shadow-md border border-gray-200 bg-white 
                 hover:shadow-2xl hover:border-transparent hover:bg-gradient-to-br 
                 hover:from-[#6A38C2]/10 hover:to-[#FA4F09]/10 
                 transform hover:scale-[1.02] transition-all duration-300 cursor-pointer"
    >
      {/* Company Info */}
      <div className="mb-3">
        <h1 className="text-xl font-semibold text-gray-800">{job.name}</h1>
        <p className="text-sm text-gray-500 flex items-center gap-1">
          <MapPin size={16} className="text-gray-400" />
          {job.location || "India"}
        </p>
      </div>

      {/* Job Title */}
      <h2 className="font-bold text-lg text-[#6A38C2] mb-2">{job.title}</h2>

      {/* Description */}
      <p className="text-sm text-gray-600 line-clamp-3 mb-4">
        {job.description?.length > 120
          ? job.description.substring(0, 120) + "..."
          : job.description}
      </p>

      {/* Job Info Badges */}
      <div className="flex flex-wrap gap-2 items-center mt-3">
        <Badge
          variant="outline"
          className="flex items-center gap-1 text-blue-700 font-semibold border-blue-300"
        >
          <Users size={14} />
          {job.position} Openings
        </Badge>

        <Badge
          variant="outline"
          className="flex items-center gap-1 text-[#FA4F09] font-semibold border-orange-300"
        >
          <IndianRupee size={14} />
          {job.salary} LPA
        </Badge>

        <Badge
          variant="outline"
          className="flex items-center gap-1 text-[#6A38C2] font-semibold border-purple-300"
        >
          <Briefcase size={14} />
          {job.jobType}
        </Badge>
      </div>
    </div>
  );
};

export default JobCards;
