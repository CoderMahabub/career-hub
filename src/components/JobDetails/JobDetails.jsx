import { useLoaderData, useParams } from "react-router-dom";
import { LuCircleDollarSign } from "react-icons/lu";
import { MdTask, MdEmail, MdLocationOn } from "react-icons/md";
import { CiPhone } from "react-icons/ci";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { saveJobApplication } from "../../utility/localStorage";

const JobDetails = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const job = jobs.find((job) => job.id === idInt);
  const {
    salary,
    job_title,
    contact_information,
    job_description,
    job_responsibility,
    educational_requirements,
    experiences,
  } = job;

  const handleApply = () => {
    saveJobApplication(id);
    toast("You have applied successfully");
  };
  return (
    <div className="py-6">
      <div className="grid gap-4 md:grid-cols-4">
        <div className="border md:col-span-3 text-white">
          <p>
            Job Description:{" "}
            <span className="text-gray-500">{job_description}</span>
          </p>
          <br />
          <p>
            Job Responsibility:{" "}
            <span className="text-gray-500">{job_responsibility}</span>
          </p>
          <br />
          <p>Education Requirements:</p> <br />
          <span className="text-gray-500">{educational_requirements}</span>
          <p>Experiences:</p> <br />
          <span className="text-gray-500">{experiences}</span>
        </div>
        <div className="p-2 border md:col-span-1 bg-slate-200 text-gray-900">
          <h4 className="text-xl  text-extrabold mb-2">Job Details</h4>
          <p className="flex gap-2 items-center">
            <LuCircleDollarSign className="text-xl" />
            Salary: <span className="text-gray-500">{salary}</span>
          </p>
          <p className="flex gap-2 items-center">
            <MdTask className="text-3xl" />
            Job Title: <span className="text-gray-500">{job_title}</span>
          </p>
          <h4 className="text-xl  text-extrabold my-2">Contact Information</h4>
          <p className="flex gap-2 items-center">
            <CiPhone className="text-xl" />
            Phone:{" "}
            <span className="text-gray-500">{contact_information.phone}</span>
          </p>
          <p className="flex gap-2 items-center">
            <MdEmail className="text-xl" />
            Email:{" "}
            <span className="text-gray-500">{contact_information.email}</span>
          </p>
          <p className="flex gap-2 items-center">
            <MdLocationOn className="text-xl" />
            Address:{" "}
            <span className="text-gray-500">{contact_information.address}</span>
          </p>
          <button onClick={handleApply} className="btn btn-primary w-full">
            Apply Now
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default JobDetails;
