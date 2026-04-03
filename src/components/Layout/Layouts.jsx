import { useState } from "react";
import { GrTransaction } from "react-icons/gr";
// import { Menu, X } from "lucide-react";
import { MdSpaceDashboard } from "react-icons/md";
import { MdInsights } from "react-icons/md";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/Auths";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { RiMenuFoldLine } from "react-icons/ri";
import { Transactions } from "../../pages/Transaction";

export const Layout = ({ children }) => {
  const [open, setOpen] = useState(false);
  const { role, setRole } = useAuth();

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 min-h-screen overflow-x-hidden">

     
      <div
        className={`fixed md:static top-0 left-0 min-h-screen w-50 z-50 p-5 text-white
        bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900
        transform transition-transform duration-300
        ${open ? "translate-x-0" : "-translate-x-full"} 
        md:translate-x-0`}
      >
        
        <div className="flex justify-between mb-6 md:hidden">
          <h2 className="font-bold  hover:text-gray-300   ">Finance Sidebar</h2>
          <button className="hover:text-gray-300" onClick={() => setOpen(false)}>
            <RiMenuFoldLine size={20}/>
          </button>
        </div>



       
        <h2 className="hidden md:block text-center   font-bold mb-6">
          Finance Sidebar
        </h2>

       
        

        
        <nav className="flex flex-col gap-4 text-center ">
          <Link className="hover:text-gray-300" to="/" onClick={() => setOpen(false)}> <MdSpaceDashboard className="relative top-5 left-4"/>Dashboard</Link>
          <Link className="hover:text-gray-300" to="/transactions" onClick={() => setOpen(false)}><GrTransaction className="relative top-5 left-3"/> Transactions</Link>
          <Link  className="hover:text-gray-300" to="/Insights" onClick={() => setOpen(false)}  > <MdInsights className="relative top-5 left-7" />
Insights</Link>
          
        </nav>
      </div>

      
      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

     
      <div className="flex-1  w-full md:ml- mt-5">

        
        <div className=" md:hidden text-white flex flex-row justify-between ">
          <button  className="relative left-2 top-2" onClick={() => setOpen(true)}>
            <HiOutlineMenuAlt2 size={28}  />
          </button>

         
        </div>

        <select 
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="w-25 mb-6 bg-white/10 border border-white/20 rounded px-1 py-1 absolute right-2 top-2 text-white  "
        >
          <option className="text-black" value="viewer">Viewer</option>
          <option className="text-black" value="admin">Admin</option>
        </select>
       

        
        <div className="p-4">
          {children}
        </div>

      </div>
    </div>
  );
};