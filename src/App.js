import "./App.css";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Inventory from "./components/pages/Inventory";
import NotFound from "./components/PageNotFound";
import Dashboard from "./components/pages/Dashboard";
import Sidebar from "./components/Sidebar";

import Add from "./components/pages/add/Add";

function App() {
   return (
      <div className="App">
         <Router>
            <Nav />
            <div className="flex ">
               <div className=" w-1/6 bg-[#F5F5F5] min-h-[90vh]">
                  <Sidebar />
               </div>
               <div className=" w-5/6">
                  <Routes>
                     <Route path="/" exact element={<Dashboard />} />
                     <Route path="/dashboard" exact element={<Dashboard />} />

                     <Route path="/inventory" exact element={<Inventory />} />
                     <Route path="/inventory/add" exact element={<Add />} />

                     <Route path="/*" element={<NotFound />} />
                  </Routes>
               </div>
            </div>
         </Router>
      </div>
   );
}

export default App;
