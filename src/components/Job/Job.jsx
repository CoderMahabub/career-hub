import PropTypes from "prop-types";
import { MdLocationOn } from "react-icons/md";
import { FaDollarSign } from "react-icons/fa6";

const Job = ({ job }) => {
  const {
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
  } = job;

  return (
    <div>
      <div className="card card-compact bg-base-100 shadow-xl">
        <figure>
          <img src={logo} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{job_title}</h2>
          <p>{company_name}</p>
          <div>
            <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] text-[#7E90FE]">
              {remote_or_onsite}
            </button>
            <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] ml-4 text-[#7E90FE]">
              {job_type}
            </button>
          </div>
          <div className="card-actions">
            <button className="btn btn-primary">View Details</button>
          </div>
          <div className="flex items-center mt-4">
            <h2 className="flex mr-4">
              <MdLocationOn className="text-2xl mr-2" />
              {location}
            </h2>
            <h2 className="flex items-center text-2xl">
              <FaDollarSign />
              {salary}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

Job.propTypes = {
  job: PropTypes.object.required,
};

export default Job;
