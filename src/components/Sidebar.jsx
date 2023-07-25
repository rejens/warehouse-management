import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
   return (
      <div>
         <ul>

            <Link to="/dashboard">
               <li className="py-2 px-5 text-xl bg-slate-400 text-white border-b-[1px] border-gray-400 ">
                  Dashboard
               </li>
            </Link>

            <Link to="/inventory">
               <li className="py-2 px-5 text-xl bg-slate-400 text-white border-b-[1px] border-gray-400 ">
                  Inventory
               </li>
            </Link>
         </ul>
      </div>
   );
}
