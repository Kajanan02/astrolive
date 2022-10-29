import React, {useEffect, useState} from 'react';
import hostel01 from "../../images/hotels/01.webp"
import hostel02 from "../../images/hotels/02.webp"
import hostel03 from "../../images/hotels/03.webp"
import hostel04 from "../../images/hotels/04.webp"
import hostel05 from "../../images/hotels/05.webp"
import hostel06 from "../../images/hotels/06.jpg"
import hostel07 from "../../images/hotels/07.webp"
import hostel08 from "../../images/hotels/08.webp"
import {db} from "../utils/firebase-config"
import {collection, getDocs} from "firebase/firestore"
import HostelCard from "./hostel-card";


export default function ListBoarding(props) {

    const [boarding, setBoarding] = useState([])
    const tempBoardingRef = collection(db, "temperoryList")
    const imgArr = [hostel01, hostel02, hostel03, hostel04, hostel05, hostel06, hostel07, hostel08]


    useEffect(() => {
        const getBoarding = async () => {
            const data = await getDocs(tempBoardingRef)
            setBoarding(data.docs.map((doc, index) => ({...doc.data(), id: doc.id, img: imgArr[index]})))

        }
        getBoarding()
    }, [])

    console.log(boarding)

    return (
        <div className={"container  pt-5 mb-5"}>
            <div className={"text-center "}>
                <h2 className={"text_line_img heading position-relative"}>Entire city of choice.</h2>
            </div>
            <div>

                <div className={"row mt-5 pt-5"}>
                    {boarding.map((data) => (
                        <div className={"col-md-3"} id={data.id}>
                            <HostelCard km={data.farAway} location={data.location} price={data.price} img={data.img}/>
                        </div>
                    ))}
                </div>

                {/*<div className={"hostel-card"}>*/}
                {/*    <img src={hostel01} width={"300px"} height={'200px'}/>*/}
                {/*    <div className={"ps-4 pb-3"}>*/}
                {/*        <div className={"location-card-txt"}>*/}
                {/*            Kudiyakolla,Badulla*/}
                {/*        </div>*/}
                {/*        <div className={"far-away"}>*/}
                {/*            2 kilometers away*/}
                {/*        </div>*/}
                {/*        <div>*/}
                {/*            <span className={"location-card-txt "}> LKR 30000</span> / monthly*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>

        </div>


    );
}

