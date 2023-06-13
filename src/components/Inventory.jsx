import React from "react";
import data from "../utils/data.json";

export default function Inventory() {
   return (
      <div>
         <table className="w-full table-fixed">
            <thead className="bg-slate-700 text-white h-16 text-2xl">
               <tr>
                  <th className="font-medium">sn</th>
                  <th className="font-medium">name</th>
                  <th className="font-medium">quantity</th>
                  <th className="font-medium">price</th>
               </tr>
            </thead>
            <tbody className="text-xl">
               {data.map((item, index) => {
                  return (
                     <tr key={index} className="odd:bg-gray-200 even:bg-gray-300">
                        <td className="text-center py-3">{index + 1}</td>
                        <td className="text-center py-3">{item.name}</td>
                        <td className="text-center py-3">{item.quantity}</td>
                        <td className="text-center py-3">{item.price}</td>
                     </tr>
                  );
               })}
            </tbody>
         </table>
      </div>
   );
}
