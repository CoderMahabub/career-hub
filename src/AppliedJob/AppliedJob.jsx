import PropTypes from "prop-types";
import { LuCircleDollarSign } from "react-icons/lu";
import { MdLocationOn } from "react-icons/md";
const AppliedJob = ({ appliedJob }) => {
  console.log(appliedJob);
  const {
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    job_type,
    location,
    salary,
  } = appliedJob;
  return (
    <div className="grid gap-2 grid-cols-3 md:mx-2 bg-white py-4 my-2 px-1">
      <div>
        <img src={logo} alt="" />
      </div>
      <div>
        <h2 className="text-bold text-xl">{job_title}</h2>
        <p>{company_name}</p>
        <div>
          <button className="btn mr-2 bg-slate-200 text-black">
            {remote_or_onsite}
          </button>
          <button className="btn bg-slate-200 text-black">{job_type}</button>
        </div>
        <div className="flex">
          <p className="flex items-center mr-2">
            <MdLocationOn />
            {location}
          </p>
          <p className="flex items-center">
            <LuCircleDollarSign /> {salary}
          </p>
        </div>
      </div>
      <button className="btn">View Details</button>
    </div>
  );
};

AppliedJob.propTypes = {
  appliedJob: PropTypes.object.require,
};
export default AppliedJob;
