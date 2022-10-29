import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from "./navbar";
import Header from "./header";
import ListBoarding from "./list-boardings";
import ListUniversity from "./list-university";
import Explore from "./explore";
import Footer from "./footer";


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
