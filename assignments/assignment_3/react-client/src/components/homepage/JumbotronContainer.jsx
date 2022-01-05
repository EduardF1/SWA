// 3rd Party
import Jumbotron from "react-bootstrap/Jumbotron";
//Own
import {Filter} from "../filter/Filter";
import {HeaderLabel} from "./HeaderLabel";
import {ReloadDataButton} from "./ReloadDataButton";
import {SelectCityHorizontalButtonGroup} from "./SelectCityHorizontalButtonGroup";
import {PostWeatherDataModal} from "../post-weather-data-modal/PostWeatherDataModal";

/**
 * JumbotronContainer component function.
 * @param getSelectedCityBackground (Function) Prop used to set (dynamically) the css of the jumbotron.
 * @param selectedCity (String) Prop used for identifying the currently selected city, the initial (default) value is "Horsens".
 * @param onSelectedCityChange (Function) Prop used to change the selected city and retrieve the forecast and historical data for it.
 * @param handleDateIntervalCallback (Function) Prop used to trigger the initialization of the DateInterval filter, further passed to the "Filter" component.
 * @returns {JSX.Element} The JumbotronContainer component function.
 * @constructor
 */
function JumbotronContainer({getSelectedCityBackground, selectedCity, onSelectedCityChange, handleDateIntervalCallback}) {
    return (
        <>
            <Jumbotron fluid id="weather-header" className={getSelectedCityBackground(selectedCity)}>
                <div className="col-md-6 mx-auto text-white text-center">
                    <HeaderLabel/>
                    {/* Modal for posting weather data (Historical)*/}
                    <PostWeatherDataModal/>{' '}
                    <SelectCityHorizontalButtonGroup onSelectedCityChange={onSelectedCityChange}/>
                    <Filter selectedCity={selectedCity} triggerFilterSet={handleDateIntervalCallback}/>
                    <ReloadDataButton selectedCity={selectedCity}/>
                </div>
            </Jumbotron>
        </>
    )
}

export default JumbotronContainer;