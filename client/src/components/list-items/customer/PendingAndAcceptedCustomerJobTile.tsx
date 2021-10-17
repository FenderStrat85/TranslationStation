import { Link } from 'react-router-dom';

const PendingAndAcceptedCustomerJobTile = (props: { job: any }) => {
  const { jobName, status, jobType, languageFromName, languageToName, _id } =
    props.job;
  return (
    <div className='panding-and-accepted-customer-job-tile__container'>
      {status === 'pending' ? (
        <>
          <p> {jobName} : Status:{status} is a {jobType}</p>
          <p>Language from: {languageFromName}</p>
          <p>Language to: {languageToName}</p>
        </>
      ) : (
        <>
          <p> {jobName} : Status:{status} is a {jobType}</p>
          <p>Language from: {languageFromName}</p>
          <p>Language to: {languageToName}</p>
          <Link
            to={{
              pathname: `/app/customer/acceptedjob/${jobType}:${_id}`,
              state: props.job,
            }}
          >
            <button>Go to job:</button>
          </Link>
        </>
      )}
    </div>
  );
};

export default PendingAndAcceptedCustomerJobTile;
