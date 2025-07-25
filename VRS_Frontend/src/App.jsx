import { Routes,Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

// Home Page Component
import Home from './pages/Home'

// Navbar Component
import Navbar from './components/common/Navbar';


import './App.css';


function App() {
    return (
        <div className="App"> 
            <Navbar/>
            <Routes>
                <Route path="/" element = {<Home/>} />

            </Routes>
        </div>
    )
}


export default App;