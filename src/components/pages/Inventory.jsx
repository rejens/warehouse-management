import React from "react";
import data from "../../utils/data.json";
import { Link } from "react-router-dom";
export default function Inventory() {
   return (
      <div>
         <div className="flex justify-end mx-5">
            <Link
               to={"/inventory/add"}
               className="bg-[#94a3b8] px-4 py-2 rounded-sm text-white"
            >
               add
            </Link>
         </div>
         <table className="w-full table-fixed">
            <thead className="bg-slate-700 text-white h-16 text-xl">
               <tr>
                  <th className="font-medium">sn</th>
                  <th className="font-medium">name</th>
                  <th className="font-medium">quantity</th>
                  <th className="font-medium">price</th>
                  <th className="font-medium">action</th>
               </tr>
            </thead>
            <tbody className="text-md">
               {data.map((item, index) => {
                  return (
                     <tr
                        key={index}
                        className="odd:bg-gray-200 even:bg-gray-300"
                     >
                        <td className="text-center py-3">{index + 1}</td>
                        <td className="text-center py-3">{item.name}</td>
                        <td className="text-center py-3">{item.quantity}</td>
                        <td className="text-center py-3">{item.price}</td>
                        <td className="text-center py-3"> update | delete </td>
                     </tr>
                  );
               })}
            </tbody>
         </table>
      </div>
   );
}
