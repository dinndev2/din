import { API_URL } from '../../constants'
import { useState, useEffect } from 'react'
import Job from './Job';
import  Loading  from '../common/Loading'

function Jobs () {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getJobs() {
      const jobs_api_url = `${API_URL}/jobs`
      try {
        const response = await fetch(jobs_api_url);
        if (response.ok) {
          const raw_jobs = await response.json();
          setJobs(raw_jobs)
        } else {
          throw new Error(`Response status: ${response.status}`);
        }
      } catch(error) {
      } finally {
        setLoading(false)
      }
    }
    getJobs()
  },[]);
  return (
    <div className='w-full gap-3' style={{height: "92vh"}}>
      {loading ? <Loading /> : jobs.map( job => {
        return <Job key={job.id} description={job.description} name={job.name} code_link={job.code_link} link={job.link}/>
      })}
    </div>
  )
}


// route
export const jobRoutes = {
    path: "jobs",
    element: <Jobs/>
  }
  
  
export default Jobs