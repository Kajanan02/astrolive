import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from "./components/navbar";
import Header from "./components/Home/header";
import ListBoarding from "./components/Home/list-boardings";
import ListUniversity from "./components/Home/list-university";
import Explore from "./components/Home/explore";
import Footer from "./components/footer";


function App() {
    return (
        <div className="">
            <Navbar/>
            <Header/>
            <ListBoarding/>
            <Explore/>
            <ListUniversity/>
            <Footer/>

        </div>
    );
}

export default App;
