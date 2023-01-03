import React from 'react';
import {useNavigate} from "react-router-dom";

export default function HostelCard({location, km, price, img}) {
    const history = useNavigate()
    return (
        <div className={"hostel-card cursor-pointer"} onClick={() => history("/boarding-view")}>
            <img src={img} width={"300px"} height={'200px'}/>
            <div className={"ps-4 pb-3"}>
                <div className={"location-card-txt"}>
                    {location}
                </div>
                <div className={"far-away"}>
                    {km} kilometers away
                </div>
                <div>
                    <span className={"location-card-txt "}> LKR {price}</span> / monthly
                </div>
            </div>
        </div>
    );
}

