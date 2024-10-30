import { useRef, useState } from "react";
import { API_URL } from "../../constants";
import toast from 'react-hot-toast'
import jobs from '../../assets/jobs.svg'

export default function JobSettings() {
  const notify = (msg) => toast(msg);
  const formRef = useRef();
  const [errors, setErrors] = useState({});
  const jobs_api_url = `${API_URL}/jobs`;
  const validateForm = () => {
    const formData = new FormData(formRef.current);
    const newErrors = {};

    // Required field validation
    if (!formData.get("name")) newErrors.name = "Job name is required.";
    if (!formData.get("start")) newErrors.start = "Start date is required.";
    if (!formData.get("end")) newErrors.end = "End date is required.";
    if (!formData.get("description")) newErrors.description = "Description is required.";

    // Date validation: Ensure start date is before end date
    const startDate = new Date(formData.get("start"));
    const endDate = new Date(formData.get("end"));
    if (startDate && endDate && startDate > endDate) {
      newErrors.date = "Start date cannot be after the end date.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Valid if no errors
  };

  async function createJob(event) {
    event.preventDefault();
    
    if (!validateForm()) return; // Exit if validation fails

    const formData = new FormData(formRef.current);
    const job = {
      description: formData.get("description"),
      name: formData.get("name"),
      end: formData.get("end"),
      start: formData.get("start"),
      code_link: formData.get("code_link"),
      link: formData.get("link"),
    };

    try {
      const response = await fetch(jobs_api_url, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(job),
      });
      if (response.ok) {
        notify(`Job ${job.name} Created! check it out in jobs tab`)
        formRef.current.reset(); // reset form fields
        setErrors({}); // clear errors
      } else {
        throw new Error(`Response status: ${response.status}`);
      }
    } catch (error) {
      console.error(error.message);
    }
  }

  return (
    <div className="mt-6 w-8/12">
      <div className="mb-4">
        <div className="flex items-center gap-2">
          <img src={jobs} alt="jobs" className="w-8 h-8" />
          <h1 className="text-xl font-bold">Job Creation</h1>
        </div>
        <span className="text-gray-500 text-xs">Create job information that will appear in jobs tab </span>
      </div>
      <form ref={formRef}>
        <div className="flex flex-col gap-3">
          <div>
            <label htmlFor="job_name_input" className="text-xs text-gray-700 font-semibold">
              Job name
            </label>
            <input
              type="text"
              name="name"
              id="job_name_input"
              className="mt-2 block w-full rounded-lg border-0 py-2 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm/6"
            />
            {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}
          </div>
          <div className="flex justify-between w-full">
            <div className="w-1/2 mr-2">
              <label htmlFor="job_start_input" className="text-xs text-gray-700 font-semibold">
                Start Date
              </label>
              <input
                type="date"
                name="start"
                id="job_start_input"
                className="mt-2 block w-full rounded-lg border-0 py-2 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm/6"
              />
              {errors.start && <p className="text-red-500 text-xs">{errors.start}</p>}
            </div>
            <div className="w-1/2">
              <label htmlFor="job_end_input" className="text-xs text-gray-700 font-semibold">
                End Date
              </label>
              <input
                type="date"
                name="end"
                id="job_end_input"
                className="mt-2 block w-full rounded-lg border-0 py-2 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm/6"
              />
              {errors.end && <p className="text-red-500 text-xs">{errors.end}</p>}
              {errors.date && <p className="text-red-500 text-xs">{errors.date}</p>}
            </div>
          </div>
          <div>
            <label htmlFor="job_description_input" className="text-xs text-gray-700 font-semibold">
              Description
            </label>
            <textarea
              name="description"
              id="job_description_input"
              className="mt-2 block w-full rounded-lg border-0 py-2 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm/6"
            />
            {errors.description && <p className="text-red-500 text-xs">{errors.description}</p>}
          </div>
          <div className="flex justify-between w-full">
            <div className="w-1/2 mr-2">
              <label htmlFor="job_link_input" className="text-xs text-gray-700 font-semibold">
                Demo Link
              </label>
              <input
                type="text"
                name="link"
                id="job_link_input"
                className="mt-2 block w-full rounded-lg border-0 py-2 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm/6"
              />
            </div>
            <div className="w-1/2">
              <label htmlFor="job_code_link_input" className="text-xs text-gray-700 font-semibold">
                Code Base
              </label>
              <input
                type="text"
                name="code_link"
                id="job_code_link_input"
                className="mt-2 block w-full rounded-lg border-0 py-2 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm/6"
              />
            </div>
          </div>
          <div>
            <button type="submit" className="text-xs mt-2" onClick={createJob}>
              Create job
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
