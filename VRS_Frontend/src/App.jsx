import { Routes,Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

// Home Page Component
import Home from './pages/Home'

// Navbar Component
import Navbar from './components/common/Navbar';


import './App.css';


import Footer from './components/common/Footer';
import PrivateRoute from './components/common/PrivateRoute';
import VendorRegister from "./components/vendor/VendorRegister";


function App() {
    return (

        <> 
       

        <div className="App"> 
            <Navbar/>

            <Routes>
                <Route path="/" element = {<Home/>} />
                <Route path="/vendor/Register" element = {<VendorRegister/>}></Route>

            </Routes>

            <Footer />
      
        </div>

        </>

        

    )
}


export default App;