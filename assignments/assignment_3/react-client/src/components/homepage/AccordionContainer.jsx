// 3rd Party
import Accordion from "react-bootstrap/Accordion";
// Own
import {ToggleButtonsCard} from "./ToggleButtonsCard";
import {WeatherHistoryCard} from "./WeatherHistoryCard";
import {WeatherForecastCard} from "./WeatherForecastCard";

/**
 * AccordionContainer component function.
 * @param forecastData (Array of objects) Prop used to render the row data of the "WeatherForecastCard" component.
 * @param historicData (Array of object) Prop used to render the row data of the "WeatherHistoryCard" component.
 * @param selectedCity (String) Prop used to determine the header label of the "WeatherForecastCard" or "WeatherHistoryCard" tables.
 * @returns {JSX.Element} The AccordionContainer component function.
 * @constructor
 */
function AccordionContainer({forecastData, historicData,selectedCity}) {
    return (
        <>
            <Accordion>
                {/* Toggle buttons */}
                <ToggleButtonsCard/>
                <WeatherForecastCard
                    forecastData={forecastData}
                    selectedCity={selectedCity}
                />
                <WeatherHistoryCard
                    historicData={historicData}
                    selectedCity={selectedCity}
                />
            </Accordion>
        </>
    )
}

export default AccordionContainer;