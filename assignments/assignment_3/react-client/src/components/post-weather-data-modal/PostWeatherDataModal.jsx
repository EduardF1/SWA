import 'bootstrap/dist/css/bootstrap.min.css';

import React, {useState} from 'react';
import Modal from 'react-bootstrap/Modal';

import {store} from '../../store';

import {postHistoricData} from '../../reducers/weatherData';

import Footer from "./footer/Footer";
import {Header} from "./header/Header";
import Body from "./body/Body";
import {OpenModalButton} from "./open-button/OpenModalButton";


export const PostWeatherDataModal = () => {
    const [show, setShow] = useState(false);
    const [type, setType] = useState("temperature");
    const [unit, setUnit] = useState("°C");
    const [place, setPlace] = useState("Horsens");
    const [value, setValue] = useState(0);
    const [precipitationType, setPrecipitationType] = useState("-");
    const [direction, setDirection] = useState("-");
    const [dateTime, setDateTime] = useState(new Date());


    // Handles closing and opening modal popup dialog window
    const togglePostDialog = () => setShow(!show);

    const handleSaveData = () => {
        switch (type) {
            case "temperature":
            case "cloud coverage":
                store.dispatch(postHistoricData("data", type, value, unit, dateTime, place, null));
                break;
            case "precipitation":
                store.dispatch(postHistoricData("data", type, value, unit, dateTime, place, precipitationType));
                break;
            case "wind speed":
                store.dispatch(postHistoricData("data", type, value, unit, dateTime, place, direction));
                break;
            default:
                break;
        }
        togglePostDialog()
    };

    const onChange = dateTime => setDateTime(dateTime);

    return (
        <>
            <OpenModalButton togglePostDialog={togglePostDialog}/>
            <Modal
                show={show}
                onHide={togglePostDialog}
                className="post-modal"
            >
                <Header/>
                <Modal.Body>
                    <Body
                        setPlace={setPlace}
                        setType={setType}
                        setDirection={setDirection}
                        setUnit={setUnit}
                        setValue={setValue}
                        setPrecipitationType={setPrecipitationType}
                        onChange={onChange}
                        dateTime={dateTime}
                    />
                </Modal.Body>
                <Footer
                    togglePostDialog={togglePostDialog}
                    handleSaveData={handleSaveData}/>
            </Modal>
        </>
    );
}