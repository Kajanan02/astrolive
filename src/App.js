import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./components/Home/home";
import {Route, Routes} from "react-router-dom";
import BoardingAdd from "./components/Boarding-add/boarding-add";
import BecomeHost from "./components/Boarding-add/become-host";


function App() {
    return (
        <div className="">
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/become-a-host" element={<BecomeHost/>}/>
                <Route path="/host" element={<BoardingAdd/>}/>

            </Routes>

            <Footer/>

        </div>
    );
}

export default App;
