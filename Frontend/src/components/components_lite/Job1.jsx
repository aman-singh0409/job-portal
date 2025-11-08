import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Badge } from "../ui/badge";
import { Bookmark, BookMarked } from "lucide-react";

const Job1 = ({ job }) => {
  const navigate = useNavigate();
  const [isBookmarked, setIsBookmarked] = useState(false);

  // Fix for days ago calculation
  const daysAgoFunction = (mongodbTime) => {
    const createdAt = new Date(mongodbTime);
    const currentTime = new Date();
    const timeDifference = currentTime - createdAt;
    return Math.floor(timeDifference / (1000 * 60 * 60 * 24)); // 24 hours in ms
  };

  return (
    <div
      className="p-6 rounded-2xl shadow-md bg-white border border-gray-100 
      hover:shadow-xl hover:shadow-blue-100 hover:-translate-y-1 transition-all duration-300"
    >
      {/* Top Section: Date + Bookmark */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500">
          {daysAgoFunction(job?.createdAt) === 0
            ? "Today"
            : `${daysAgoFunction(job?.createdAt)} days ago`}
        </p>
        <Button
          variant="outline"
          className="rounded-full hover:bg-blue-50 transition"
          size="icon"
          onClick={() => setIsBookmarked(!isBookmarked)}
        >
          {isBookmarked ? (
            <BookMarked className="text-blue-600" />
          ) : (
            <Bookmark className="text-gray-500" />
          )}
        </Button>
      </div>

      {/* Company Info */}
      <div className="flex items-center gap-3 my-3">
        <div className="border border-gray-200 rounded-full p-2 bg-gray-50">
          <Avatar className="h-10 w-10">
            <AvatarImage src={job?.company?.logo} alt="Company Logo" />
          </Avatar>
        </div>
        <div>
          <h1 className="font-semibold text-lg">{job?.company?.name}</h1>
          <p className="text-sm text-gray-500">{job?.location || "India"}</p>
        </div>
      </div>

      {/* Job Info */}
      <div>
        <h1 className="font-bold text-xl text-gray-800">{job?.title}</h1>
        <p className="text-sm text-gray-600 mt-1 line-clamp-3">
          {job?.description || "No description available"}
        </p>
      </div>

      {/* Job Tags */}
      <div className="flex flex-wrap gap-2 mt-4">
        <Badge className="text-blue-700 font-bold bg-blue-50" variant="secondary">
          {job?.position} Positions
        </Badge>
        <Badge className="text-[#F83002] font-bold bg-red-50" variant="secondary">
          {job?.jobType}
        </Badge>
        <Badge className="text-[#7209b7] font-bold bg-purple-50" variant="secondary">
          {job?.salary} LPA
        </Badge>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-3 mt-5">
        <Button
          onClick={() => navigate(`/description/${job?._id}`)}
          variant="outline"
          className="flex-1 border-blue-600 text-blue-600 hover:bg-blue-50 transition"
        >
          View Details
        </Button>
        <Button
          onClick={() => setIsBookmarked(true)}
          className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:opacity-90 transition"
        >
          Save For Later
        </Button>
      </div>
    </div>
  );
};

export default Job1;
