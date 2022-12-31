import React, {useState} from 'react';
import OptionBtn from "../core-components/option-btn";
import {Button} from "@mui/material";
import {useTheme} from '@mui/material/styles';
import FeatherIcon from "feather-icons-react";
import GoogleMapAdd from "./google-map";
import {FileUploader} from "react-drag-drop-files";

function BoardingAdd(props) {

    const fileTypes = ["JPG", "PNG", "GIF"];

    const [options, setOptions] = useState([{heading: "House", icon: "home", selected: false}, {
        heading: "Apartment",
        icon: "archive",
        selected: false
    }])
    const [values, setValues] = useState({})
    const [optionsGuest, setOptionsGuest] = useState([{
        heading: "An entire place",
        icon: "home",
        selected: false,
        subTxt: "Guests have the whole place to themselves.They use entire House."
    }, {
        heading: "A private room",
        icon: "archive",
        subTxt: "Guests sleep in a private room but some areas may be shared with you or others.",
        selected: false
    }, {
        heading: "A shared room",
        icon: "users",
        subTxt: "Guests sleep in a room or common area that may be shared with you or others.",
        selected: false
    }])

    const theme = useTheme();
    const [activeStep, setActiveStep] = useState(4);
    const [activeStepPercentage, setActiveStepPercentage] = useState(0);
    const [file, setFile] = useState([]);
    const handleChangeFileUpload = (data) => {
        Object.keys(data).forEach(function (key, index) {
            data[key]["url"] = URL.createObjectURL(data[index]);
        });
        console.log(data)
        setFile(data);
    };

    const handleNext = () => {
        let data = activeStep + 1
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setActiveStepPercentage(data * 100 / 10)
    };

    const handleBack = () => {
        let data = activeStep - 1
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
        setActiveStepPercentage(data * 100 / 10)
    };

    function updateData(index, arr, type) {
        let data = [...arr]
        data.map((item) => item.selected = false)
        data[index].selected = !arr[index].selected
        console.log(data[index])
        // setValues({})
        if (type === "options") {
            setOptions(data)
            setValues({...values, placeType: data[index].heading})
        } else {
            setOptionsGuest(data)
            setValues({...values, studentGet: data[index].heading})
        }
    }

    function removeImg(index) {
        let data = {...file}
        console.log(data[index])
        delete data[index]
        setFile(data)
    }

    console.log(values)

    function handleChange(event) {
        event.target.type && (event.target.value = event.target.value ? event.target.value.trimStart() : '');
        setValues(values => ({...values, [event.target.name]: event.target.value}));

    }

    console.log(activeStep)

    return (
        <div className="container">
            <div className={"container-box"}>
                {activeStep === 0 ? <div>
                    <div>
                        <h2>Which of these best describes your place?</h2>
                    </div>
                    <div className={"row"}>
                        {options.map((data, index) => (
                            <div className={"col-md-6 my-3"} key={index}>
                                <OptionBtn heading={data.heading} icon={data.icon} selected={data.selected}
                                           onClick={() => updateData(index, options, "options")}
                                />
                            </div>
                        ))}
                    </div>
                </div> : null}
                {activeStep === 1 ? <div>
                    <div>
                        <h2>What type of place will guests have?</h2>
                    </div>
                    <div className={"row"}>

                        {optionsGuest.map((data, index) => (
                            <div className={"col-md-4 my-3"} key={index + "two"}>
                                <OptionBtn heading={data.heading} icon={data.icon} selected={data.selected}
                                           onClick={() => updateData(index, optionsGuest, "optionsGuest")}
                                           subTxt={data.subTxt}
                                />
                            </div>
                        ))}
                    </div>
                </div> : null}

                {activeStep === 2 ? <div>
                    <h2>Where's your place located?</h2>
                    <div className={"text-muted"}>Your address is only shared with guests after they’ve made a
                        reservation.
                    </div>

                    <div className={"mb-3 mt-5"}>
                        <div className={"row"}>
                            <div className={"col-md-6 mb-4"}>
                                <label htmlFor="exampleFormControlInput1" className="form-label">Apt,suite,etc
                                    (Optional)</label>
                                <input type="email" className="form-control" id="exampleFormControlInput1"
                                       placeholder="Enter Apt,suite" name={"apt"} onChange={handleChange}/>
                            </div>
                            <div className={"col-md-6 mb-4"}>
                                <label htmlFor="exampleFormControlInput1" className="form-label">City</label>
                                <input type="email" className="form-control" id="exampleFormControlInput1"
                                       placeholder="Enter City" name={"city"} onChange={handleChange}/>
                            </div>
                            <div className={"col-md-6 mb-4"}>
                                <label htmlFor="exampleFormControlInput1" className="form-label">State</label>
                                <input type="email" className="form-control" id="exampleFormControlInput1"
                                       placeholder="Enter State" name={"state"} onChange={handleChange}/>
                            </div>
                            <div className={"col-md-6 mb-4"}>
                                <label htmlFor="exampleFormControlInput1" className="form-label">Zip code</label>
                                <input type="email" className="form-control" id="exampleFormControlInput1"
                                       placeholder="Enter Zip Code" name={"zipCode"} onChange={handleChange}/>
                            </div>
                        </div>
                    </div>
                </div> : null}

                {activeStep === 3 ? <GoogleMapAdd/> : null}

                {activeStep === 4 ? <div>
                    <h2>Share some basics about your place</h2>
                    <div className={"text-muted"}>You'll add more details later, like bed types.</div>
                    <div className={"mb-3 mt-5"}>
                        <div className={"row"}>
                            <div className={"col-md-6 mb-4"}>
                                <label htmlFor="exampleFormControlInput1" className="form-label">No of Guests</label>
                                <input type="email" className="form-control" id="exampleFormControlInput1"
                                       placeholder="Enter Guests" name={"guests"} onChange={handleChange}/>
                            </div>
                            <div className={"col-md-6 mb-4"}>
                                <label htmlFor="exampleFormControlInput1" className="form-label">No of Beds</label>
                                <input type="email" className="form-control" id="exampleFormControlInput1"
                                       placeholder="Enter Beds" name={"beds"} onChange={handleChange}/>
                            </div>
                            <div className={"col-md-6 mb-4"}>
                                <label htmlFor="exampleFormControlInput1" className="form-label">No of Rooms</label>
                                <input type="email" className="form-control" id="exampleFormControlInput1"
                                       placeholder="Enter Rooms" name={"rooms"} onChange={handleChange}/>
                            </div>
                            <div className={"col-md-6 mb-4"}>
                                <label htmlFor="exampleFormControlInput1" className="form-label">No of Bathrooms</label>
                                <input type="email" className="form-control" id="exampleFormControlInput1"
                                       placeholder="Enter Bathrooms" name={"bathrooms"} onChange={handleChange}/>
                            </div>
                        </div>
                    </div>

                </div> : null}
                {activeStep === 5 ? <div>
                    <h2>Add some photos of your house</h2>
                    <div className={"text-muted"}>
                        You'll need 5 photos to get started. You can add more or make changes later.
                        Drag your photos here
                        Choose at least 5 photos
                        Upload from your device
                    </div>
                    <div className={"text-center"}>
                        <FileUploader handleChange={handleChangeFileUpload} name="file" types={fileTypes} multiple>
                            <div className={"drag-drop"}>
                                <FeatherIcon icon={"image"} size={"60px"} className={"mb-3 text-muted"}/>
                                <div>Drag your photos here</div>
                                <div className={"text-decoration-underline mt-3"}>Upload from your device</div>
                            </div>
                        </FileUploader>
                        <div className={"d-flex justify-content-around flex-wrap"}>
                            {Object.keys(file).map((data, index) => (
                                <div key={index} className={"mb-2 position-relative"}>
                                    <div className={"position-absolute  cursor-pointer img-remove-btn"}
                                         onClick={() => removeImg(data)}>
                                        <div className={"btn-close"}/>
                                        {/*<FeatherIcon className={"cursor-pointer footer-icons me-3"}*/}
                                        {/*             icon="x"/>*/}
                                    </div>
                                    <img src={file[data].url} width={"150px"}/>
                                </div>))}
                        </div>

                    </div>
                </div> : null}
                {activeStep === 6 ? <div>
                    <h2>Now, set your price</h2>
                    <div className={"text-muted"}>
                        You can change it anytime.
                        price per night
                    </div>
                    <div className={"price-container"}>
                        <input className="form-control form-control-lg w-50" type="text" placeholder="Enter amount"
                               aria-label=".form-control-lg example" name={"price"} onChange={handleChange}/>

                        <div className={"fw-normal mt-3"}>per month</div>
                    </div>
                </div> : null}
            </div>


            <div className={"my-5"}>
                <div className="progress">
                    <div className="progress-bar progress-bar-striped bg-dark progress-bar-animated"
                         role="progressbar"
                         aria-label="Animated striped example" aria-valuenow={activeStep * 10 / 100} aria-valuemin="0"
                         aria-valuemax="100"
                         style={{width: activeStepPercentage + "%"}}></div>
                </div>
                <div className={"d-flex justify-content-between mt-3 mb-5"}>
                    <Button disabled={activeStepPercentage === 0} variant="outlined"
                            className={activeStepPercentage !== 0 && "border-secondary text-dark"}
                            onClick={handleBack}>Back</Button>
                    <Button disabled={activeStepPercentage === 100} variant="contained" color={"secondary"}
                            className={activeStepPercentage !== 100 && "bg-dark"} onClick={handleNext}>Next</Button>
                </div>
            </div>

        </div>
    );
}

export default BoardingAdd;