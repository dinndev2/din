import { Children, useEffect, useState } from "react"
import { API_URL } from "../../constants"
import SettingList from './SettingList.jsx'
import Loading from "../common/Loading"
import { Outlet, Navigate } from "react-router-dom"
import JobSettings from "./JobSettings.jsx"
import NoteSettings from "./NoteSettings.jsx"

function Settings () {
  const [settingLists, setSettingLists] = useState([])
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getSettingLists() {
      const settings_api_url = `${API_URL}/setting_lists`
      try {
        const response = await fetch(settings_api_url);
        if (response.ok) {
          const settings = await response.json();
          setSettingLists(settings)
        } else {
          throw new Error(`Response status: ${response.status}`);
        }
      } catch(error) {
        console.error(error.message);
      } finally {
        setLoading(false)
      }
    }
    getSettingLists()
  }, [])
  return (
    <div className="w-full flex" style={{height: "90vh"}}>  
      <div className="w-full">
        <h1 className='text-3xl font-bold text-yellow-500'>Settings.</h1>
        <span className="text-gray-500 text-xs">Personal Customization. for now, this section is only available to din.</span>
        <div className="flex gap-4 mt-3 border-t pt-5 ">
          { loading ? <Loading/> : settingLists.map(setting => {
          return <SettingList key={setting.id} type={setting.settings_type} order={setting.order} />
          })}
        </div>
        <div className="w-8/12 flex justify-start ">
        <Outlet/>
      </div>
      </div>
    </div>
  )
}
  
  
// route
export const settingsRoutes = {
    path: "settings",
    element: <Settings/>,
    children: [
      {
        index: true, // This will make 'jobs' the default route
        element: <Navigate to="jobs" replace />,
      },
      {
        path: 'jobs',
        element: <JobSettings/>
      },
      {
        path: 'notes',
        element: <NoteSettings/>
      }
    ]
}
    
    
  export default Settings
  
  
  