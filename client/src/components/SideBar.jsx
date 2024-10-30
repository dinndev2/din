import quicks from '../assets/quicks.svg'
import notes from '../assets/notes.svg'
import settingssvg from '../assets/settings.svg'
import jobs from '../assets/jobs.svg' 
import { API_URL } from '../constants';


import { NavLink } from "react-router-dom";


export default function SideBar() {
  return (
    <div className="rounded bg-gray-200 w-2/12 m-2 secondary-container h-full">
      <nav className="flex flex-col gap-4 items-center mt-2">
        <div className="font-bold cursor-pointer text-base mb-6 flex items-center justify-center py-2 bg-white rounded-lg border-b-4 px-2">
          <span className='text-3xl'>din.</span>
        </div>
        <NavLink to={`/`} className={`flex font-semibold cursor-pointer items-center  text-base flex gap-2 text-gray-700 transition-all w-32`}>
          <img src={quicks} alt="quicks" className="w-7 h-7" />
          Quick
        </NavLink>
        <NavLink to={`/notes`} className="flex items-center font-semibold cursor-pointer text-base flex gap-2 text-gray-700 transition-all w-32">
          <img src={notes} alt="notes" className="w-6 h-6" />
          Notes
        </NavLink>
        <NavLink to={`/jobs`} className="flex font-semibold cursor-pointer items-center  text-base flex gap-2 text-gray-700 transition-all w-32">
          <img src={jobs} alt="jobs" className="w-5 h-5" />
          Jobs
        </NavLink>
        <NavLink to={`/settings`} className="flex font-semibold cursor-pointer items-center  text-base flex gap-2 text-gray-700 transition-all w-32">
          <img src={settingssvg} alt="settings" className="w-5 h-5" />
          Settings
        </NavLink>
      </nav>
    </div>
  )
}