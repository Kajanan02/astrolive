import React from 'react';
import university01 from "./images/universities/01.jpg"
import university02 from "./images/universities/02.jpg"
import university03 from "./images/universities/03.jpg"
import university04 from "./images/universities/04.webp"
import university05 from "./images/universities/05.jpg"
import university06 from "./images/universities/06.jpg"

export default function ListUniversity(props) {

    const uniName = [{name: "Uva Wellassa University", img: university01}, {
        name: "University of Kelaniya",
        img: university02
    }, {name: "University of Moratuwa", img: university03},
        {name: "University of Peradeniya", img: university04}, {
            name: "University of Vavuniya",
            img: university05
        }, {name: "University of  sri jayewardenepura", img: university06}]

    return (
        <div className={"container browse pb-5 mb-5 pt-5 mb-5"}>
            <div className={"text-center pb-5"}>
                <h2 className={"text_line_img heading position-relative"}>Browse by University type.</h2>
            </div>

            <div className={"row"}>

                {uniName.map((data, index) => (<div className={"col-4"}>
                    <div className={"uni-card"}>
                        <img src={data.img} width={"220px"} height={"120px"}/>
                        <div className={"uni-card-name"}>
                            {data.name}
                        </div>
                    </div>
                </div>))}
            </div>
        </div>
    );
}
