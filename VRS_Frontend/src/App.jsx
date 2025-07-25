import { Routes,Route } from "react-router-dom";

// Home Page Component
import Home from './pages/Home'

// Vendor Registration Component
import VendorRegister from "./components/vendor/VendorRegister";

import './App.css';


function App() {
    return (
        <> 
            <Routes>
                <Route path="/" element = {<Home/>} />
                <Route path="/vendor/register" element={<VendorRegister />} />
               
            </Routes>
        </>
    )
}


export default App;