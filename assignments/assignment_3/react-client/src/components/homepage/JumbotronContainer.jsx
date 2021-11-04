import HeaderLabel from "./HeaderLabel";
import {PostWeatherDataModal} from "../post-weather-data-modal/PostWeatherDataModal";
import SelectCityHorizontalButtonGroup from "./SelectCityHorizontalButtonGroup";
import Filter from "../filter/Filter";
import ReloadDataButton from "./ReloadDataButton";
import Jumbotron from "react-bootstrap/Jumbotron";

function JumbotronContainer({getSelectedCityBackground, selectedCity, onSelectedCityChange, handleDateIntervalCallback}) {
    return (
        <>
            <Jumbotron fluid id="weather-header" className={getSelectedCityBackground(selectedCity)}>
                <div className="col-md-6 mx-auto text-white text-center">
                    <HeaderLabel/>
                    <div id="locations">
                        <PostWeatherDataModal />{' '}
                    </div>
                    <SelectCityHorizontalButtonGroup
                        onSelectedCityChange={onSelectedCityChange}
                    />
                    <div>
                        <Filter
                            selectedCity={selectedCity}
                            triggerFilterSet={handleDateIntervalCallback}
                        />
                        <ReloadDataButton
                            selectedCity={selectedCity}
                        />
                    </div>
                </div>
            </Jumbotron>
        </>
    )
}

export default JumbotronContainer;