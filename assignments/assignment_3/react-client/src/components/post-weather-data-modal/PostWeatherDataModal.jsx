import 'bootstrap/dist/css/bootstrap.min.css';

import React, {useState} from 'react';
import Modal from 'react-bootstrap/Modal';

import {store} from '../../store';

import {postHistoricData} from '../../reducers/weatherData';

import {Footer} from "./footer/Footer";
import {Header} from "./header/Header";
import {Body} from "./body/Body";
import {OpenModalButton} from "./open-button/OpenModalButton";
import {API_RESOURCES, DATA_TYPES, INITIAL_POST_WEATHER_DATA_MODAL_VALUES} from "../../assets/Constants";


export const PostWeatherDataModal = () => {
    const [show, setShow] = useState(
        INITIAL_POST_WEATHER_DATA_MODAL_VALUES.show
    );
    const [type, setType] = useState(
        INITIAL_POST_WEATHER_DATA_MODAL_VALUES.type
    );
    const [unit, setUnit] = useState(
        INITIAL_POST_WEATHER_DATA_MODAL_VALUES.unit
    );
    const [place, setPlace] = useState(
        INITIAL_POST_WEATHER_DATA_MODAL_VALUES.place
    );
    const [value, setValue] = useState(
        INITIAL_POST_WEATHER_DATA_MODAL_VALUES.value
    );
    const [precipitationType, setPrecipitationType] = useState(
        INITIAL_POST_WEATHER_DATA_MODAL_VALUES.precipitationType
    );
    const [direction, setDirection] = useState(
        INITIAL_POST_WEATHER_DATA_MODAL_VALUES.direction
    );
    const [dateTime, setDateTime] = useState(new Date());


    // Handles closing and opening modal popup dialog window
    const togglePostDialog = () => setShow(!show);

    const handleSaveData = () => {
        switch (type) {
            case DATA_TYPES[0]:
            case DATA_TYPES[1]:
                store.dispatch(postHistoricData(API_RESOURCES[0], type, value, unit, dateTime, place, null));
                break;
            case DATA_TYPES[2]:
                store.dispatch(postHistoricData(API_RESOURCES[0], type, value, unit, dateTime, place, precipitationType));
                break;
            case DATA_TYPES[3]:
                store.dispatch(postHistoricData(API_RESOURCES[0], type, value, unit, dateTime, place, direction));
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