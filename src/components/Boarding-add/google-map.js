import React, {useCallback, useState} from 'react';
import {Autocomplete, GoogleMap, LoadScript, MarkerF} from '@react-google-maps/api';


const containerStyle = {
    width: 'auto',
    height: '700px'
};

const center = {
    lat: 7.8731,
    lng: 80.7718
};

function GoogleMapAdd(props) {

    const [map, setMap] = useState(null)
    const [position, setPosition] = useState(null)
    const [markerCoordinate, setMarkerCoordinate] = useState({
        lat: 7.8731,
        lng: 80.7718
    })


    function onMarkerDragEnd(coord, index) {
        console.log(coord)
        const {latLng} = coord;
        let lat = latLng.lat();
        let lng = latLng.lng();
        setPosition({lat: lat, lng: lng})

    }

    console.log(position)
    const [searchBox, setSearchBox] = useState(null);
    const onLoad = useCallback(function callback(map) {
        setMap(map)
    }, [])

    const onUnmount = useCallback(function callback(map) {
        setMap(null)
    }, [])

    const onSBLoad = ref => {
        setSearchBox(ref);
        console.log(ref)
    };

    function onPlaceChanged() {
        if (searchBox !== null) {
            const places = [searchBox.getPlace()];
            const google = window.google;
            const bounds = new google.maps.LatLngBounds();
            places.forEach((place) => {
                setMarkerCoordinate({lat: place.geometry.location.lat(), lng: place.geometry.location.lng()})
                if (place.geometry.viewport) {
                    bounds.union(place.geometry.viewport);
                } else {
                    bounds.extend(place.geometry.location);
                }
            })
            map.fitBounds(bounds);
        } else {
            console.log('Autocomplete is not loaded yet!')
        }
    }


    return (
        <LoadScript googleMapsApiKey={"AIzaSyDobm_3OLsu0cFTLt-zUAgt-_7Oi-TkGT4&v=3.exp"} libraries={["places"]}>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={10}
                id="searchbox-example"
                onLoad={onLoad}
                onUnmount={onUnmount}
            >
                <MarkerF position={markerCoordinate} draggable={true}
                         onDragEnd={onMarkerDragEnd}/>

                <Autocomplete
                    onLoad={onSBLoad}
                    onPlaceChanged={onPlaceChanged}
                >
                    <div>

                        <input
                            type="text"
                            placeholder="Search Places"
                            className={"form-control"}
                            style={{
                                boxSizing: `border-box`,
                                border: `1px solid transparent`,
                                width: `360px`,
                                height: `48px`,
                                padding: `0 12px`,
                                borderRadius: `12px`,
                                boxShadow: `0 2px 6px rgba(0, 0, 0, 0.6)`,
                                fontSize: `16px`,
                                outline: `none`,
                                textOverflow: `ellipses`,
                                position: "absolute",
                                left: "50%",
                                marginLeft: "-160px",
                                marginTop: "16px"
                            }}
                        />
                    </div>
                </Autocomplete>

            </GoogleMap>
        </LoadScript>
    )
}

export default GoogleMapAdd;