import React from "react";
import { Link, NavLink } from "react-router-dom";
export default function Nav() {
   return (
      <nav className="bg-[#9DB2BF] h-20 flex justify-around items-center">
         <div>
            <Link to={"/"}>warehouse management</Link>
         </div>
         <div className="text-xl font-semibold">
            <Link to="/inventory"> Inventory</Link>
         </div>
      </nav>
   );
}
