import React from 'react';
import hostel02 from "../images/boarding-img-temp/02.jpg"
import hostel03 from "../images/boarding-img-temp/03.jpg"
import hostel04 from "../images/boarding-img-temp/04.jpg"
import hostel05 from "../images/boarding-img-temp/05.jpg"

function BoardingView(props) {

    const imgs = [hostel02, hostel03, hostel04, hostel05]

    return (
        <div className={"container"}>
            <div className={"boarding-view-layout "}>
                <div className={"heading m-0"}>
                    Miracle ocean Villa
                </div>
                <p className="text-muted text-decoration-underline">
                    Matara, Southern Province, Sri Lanka
                </p>
                <div className={"img-layout"}>
                    <div className={"grid"}>
                        <div className={"g-col-6"}>
                            <img src={hostel02} className={""} width={"5556px"}/>
                        </div>
                        {/*<div className={"col-md-6"}>*/}
                        <div className={"grid"}>
                            {imgs.map((data, index) => (<div className={"g-col-6"} key={index}>
                                <div className={"img-01 " + ([0, 1].includes(index) ? "" : "my-2")}>
                                    <img src={data} width={"286px"}/>
                                </div>
                            </div>))}
                            {/*</div>*/}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BoardingView;