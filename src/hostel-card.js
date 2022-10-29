import React from 'react';

export default function HostelCard({location, km, price, img}) {
    return (
        <div className={"hostel-card"}>
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

