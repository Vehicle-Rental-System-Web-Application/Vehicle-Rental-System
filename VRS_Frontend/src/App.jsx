import { Routes,Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

// Home Page Component
import Home from './pages/Home'

import './App.css';


import Footer from './components/common/Footer';
import PrivateRoute from './components/common/PrivateRoute';


function App() {
    return (
        <> 
       
            <Routes>
                <Route path="/" element = {<Home/>} />
            </Routes>
             <Footer />
        </>
    )
}


export default App;