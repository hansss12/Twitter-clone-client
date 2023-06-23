import { Outlet } from "react-router-dom";
import Sidebar from "../component/Sidebar";
import Trend from "../component/Trend";

export default function Layout() {
  return (
    <div className="bg-black text-white w-screen min-h-screen h-full flex select-none">
      <Sidebar />
      <div className="flex flex-1 border border-neutral-800 border-b-0">
        <Outlet />
        <Trend />
      </div>
    </div>
  )
}