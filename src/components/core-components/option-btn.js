import React from 'react';
import FeatherIcon from "feather-icons-react";

function OptionBtn(props) {
    return (
        <div className={"option-btn " + (props.selected ? "select-btn" : "")} onClick={props.onClick}>
            <FeatherIcon icon={props.icon}/>
            <div className={"fw-bold mt-1"}>
                {props.heading}
            </div>
            {props.subTxt ? <div className={"text-dark text-muted"}>
                {props.subTxt}
            </div> : null}

        </div>
    );
}

export default OptionBtn;