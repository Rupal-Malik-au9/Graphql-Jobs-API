import React from "react";
import { JobsListWrapper } from "./styled";

export default function Home() {
  const [jobData, setJobData] = React.useState([]);

  //calling API
  React.useEffect(() => {
    fetch("https://api.graphql.jobs/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query: GET_JOBS_INFO }),
    })
      .then((res) => res.json())
      .then((data) => setJobData(data.data.jobs));
  }, []);

  return (
    <JobsListWrapper>
      {jobData.length > 0 && (
        <div className="wrap cf">
          <div className="list">
            {/* list */}
            <ul className="listWrap">
              {jobData.map((job) => (
                <li className="items odd">
                  <div className="infoWrap">
                    <div className="listSection">
                      <p className="itemNumber">COMPANY: {job.companyName.name}</p>
                      <h3>{job.title}</h3>
                      {job?.cities[0] === undefined ? <p> LOCATION NOT SPECIFIED</p> : <p> LOCATION(city,country):  {job?.cities[0]?.name + ',' + job?.cities[0]?.country?.name}</p>}
                      <br />
                      <p className="remoteStatus">{job.remotes.length > 0 && job?.remotes[0].name}</p>
                      <a href={`/details?jobSlug=${jobSlug}&companySlug=${companySlug}`}> <button> GET DETAILS</button></a>
                    </div>
                  </div>
                </li>))}

            </ul>
          </div>
        </div>
      )}
    </JobsListWrapper>
  );
}

//query for jobdata
const GET_JOBS_INFO = `
query{
    jobs {
      title
      companyName: company {
        name
      }
      cities {
        name
        country {
          name
        }
      }
      remotes {
        name
      }
    }
  }
`;
