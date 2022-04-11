
import React from 'react'

export default function Details({ companySlug, JobSlug }) {
    const [JobDetail, setJobDetails] = React.useState([])
    React.useEffect(() => {
        fetch("https://api.graphql.jobs/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                query: GET_JOB_DESCRIPTION,
                variables: {
                    input: {
                        "jobSlug": JobSlug,
                        "companySlug": companySlug
                    }
                }
            }),
        })
            .then((res) => res.json())
            .then((data) => setJobDetails(data.data.job));
    }, []);

    return (
        <div>
            <ul>
                <li>description:{JobDetail.description}</li>
                <hr />
            </ul>
        </div>
    );
}

const GET_JOB_DESCRIPTION = `
query ($input:JobInput!){
    job(input:$input){
    description
    cities{
    name
    }
    }
    
    }`