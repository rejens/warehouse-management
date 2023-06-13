import "./App.css";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Inventory from "./components/Inventory";
import NotFound from "./components/PageNotFound";
import Home from "./components/Home";

function App() {
   return (
      <div className="App">
         <Router>
            <Nav />
            <Routes>
               <Route path="/" exact element={<Home />} />
               <Route path="/inventory" exact element={<Inventory />} />
               <Route path="/*" element={<NotFound />} />
            </Routes>
         </Router>
      </div>
   );
}

export default App;
