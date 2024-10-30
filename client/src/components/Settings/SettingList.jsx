import { NavLink } from "react-router-dom";

export default function SettingList({type, order}) {
  return (
    <NavLink to={type} className="block w-10 transition-all text-sm text-gray-700 font-semibold">
      {type}
    </NavLink>
  )
} 