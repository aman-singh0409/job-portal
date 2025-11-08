import React, { useEffect, useState } from "react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { useParams } from "react-router-dom";
import { JOB_API_ENDPOINT, APPLICATION_API_ENDPOINT } from "@/utils/data";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setSingleJob } from "@/redux/jobSlice";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

const Description = () => {
  const { id: jobId } = useParams();
  const dispatch = useDispatch();
  const { singleJob } = useSelector((state) => state.job);
  const { user } = useSelector((state) => state.auth);

  const [loading, setLoading] = useState(true);
  const [isApplied, setIsApplied] = useState(false);
  const [error, setError] = useState(null);

  // ✅ Fetch job details
  useEffect(() => {
    const fetchSingleJob = async () => {
      setLoading(true);
      try {
        const res = await axios.get(`${JOB_API_ENDPOINT}/get/${jobId}`, {
          withCredentials: true,
        });
        if (res.data.status) {
          dispatch(setSingleJob(res.data.job));
          setIsApplied(
            res.data.job.applications.some(
              (application) => application.applicant === user?._id
            )
          );
        } else {
          setError("Failed to load job details.");
        }
      } catch (err) {
        setError(err.message || "Something went wrong.");
      } finally {
        setLoading(false);
      }
    };

    fetchSingleJob();
  }, [jobId, dispatch, user?._id]);

  // ✅ Apply Job Handler
  const applyJobHandler = async () => {
    try {
      const res = await axios.get(`${APPLICATION_API_ENDPOINT}/apply/${jobId}`, {
        withCredentials: true,
      });
      if (res.data.success) {
        setIsApplied(true);
        dispatch(
          setSingleJob({
            ...singleJob,
            applications: [...singleJob.applications, { applicant: user?._id }],
          })
        );
        toast.success("Applied Successfully");
      }
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to apply.");
    }
  };

  if (loading)
    return (
      <div className="flex justify-center items-center h-[50vh]">
        <Loader2 className="animate-spin w-8 h-8 text-[#6A38C2]" />
      </div>
    );

  if (error)
    return (
      <div className="text-center text-red-600 font-semibold mt-10">
        ❌ {error}
      </div>
    );

  if (!singleJob) return null;

  // ✅ UI Rendering
  return (
    <div className="max-w-6xl mx-auto my-16 px-5">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-5 border-b border-gray-300 pb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {singleJob.title}
          </h1>
          <div className="flex flex-wrap gap-2">
            <Badge className="text-blue-600 font-semibold" variant="secondary">
              {singleJob.position} Positions
            </Badge>
            <Badge className="text-[#FA4F09] font-semibold" variant="secondary">
              {singleJob.salary} LPA
            </Badge>
            <Badge className="text-[#6B3AC2] font-semibold" variant="secondary">
              {singleJob.location}
            </Badge>
            <Badge className="text-gray-800 font-semibold" variant="secondary">
              {singleJob.jobType}
            </Badge>
          </div>
        </div>

        <Button
          onClick={isApplied ? null : applyJobHandler}
          disabled={isApplied}
          className={`rounded-full px-6 py-2 text-white text-base font-semibold shadow-md transition-all duration-300
            ${
              isApplied
                ? "bg-gray-500 cursor-not-allowed"
                : "bg-gradient-to-r from-[#6A38C2] to-[#FA4F09] hover:opacity-90 hover:scale-105"
            }`}
        >
          {isApplied ? "Already Applied" : "Apply Now"}
        </Button>
      </div>

      {/* Job Details */}
      <div className="mt-10 bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Job Description
        </h2>
        <p className="text-gray-600 leading-relaxed mb-6">
          {singleJob.description}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 text-gray-700">
          <p>
            <span className="font-semibold text-gray-900">Role:</span>{" "}
            {singleJob.position} Open Positions
          </p>
          <p>
            <span className="font-semibold text-gray-900">Experience:</span>{" "}
            {singleJob.experienceLevel} Years
          </p>
          <p>
            <span className="font-semibold text-gray-900">Location:</span>{" "}
            {singleJob.location}
          </p>
          <p>
            <span className="font-semibold text-gray-900">Salary:</span>{" "}
            {singleJob.salary} LPA
          </p>
          <p>
            <span className="font-semibold text-gray-900">Applicants:</span>{" "}
            {singleJob.applications?.length}
          </p>
          <p>
            <span className="font-semibold text-gray-900">Job Type:</span>{" "}
            {singleJob.jobType}
          </p>
          <p>
            <span className="font-semibold text-gray-900">Posted On:</span>{" "}
            {singleJob.createdAt.split("T")[0]}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Description;
