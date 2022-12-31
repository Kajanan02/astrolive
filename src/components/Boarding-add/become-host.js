import React from 'react';
import build from "../../images/build.mp4"
import {useNavigate} from 'react-router-dom';

function BecomeHost(props) {
    let navigate = useNavigate();
    return (
        <div className={"container host-container"}>
            <div className={"row"}>
                <div className={"col-md-6  my-auto flex-column"}>
                    <p className="fs-5 fw-semibold">Step 1</p>
                    <h3>Tell us about your place</h3>
                    <p>In this step, we'll ask you which type of property you have and if guests will book the entire
                        place or just a room. Then let us know the location and how many guests can stay.</p>
                    <div>
                        <button type="button"
                                className="btn bg-primary text-white fw-bold mt-3 w-120 explore-card-btn"
                                onClick={() => navigate("/host")}>Next
                        </button>
                    </div>
                </div>

                <div className={"col-md-6"}>
                    <video src={build} autoPlay muted width={"400px"}/>
                </div>
            </div>


        </div>
    );
}

export default BecomeHost;