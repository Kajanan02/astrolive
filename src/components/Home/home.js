import React from 'react';
import ListBoarding from "./list-boardings";
import Explore from "./explore";
import ListUniversity from "./list-university";
import Header from "./header";

function Home(props) {
    return (
        <>
            <Header/>
            <ListBoarding/>
            <Explore/>
            <ListUniversity/>
        </>
    );
}

export default Home;
