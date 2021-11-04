import Accordion from "react-bootstrap/Accordion";
import {ToggleButtonsCard} from "./ToggleButtonsCard";
import {WeatherForecastCard} from "./WeatherForecastCard";
import {WeatherHistoryCard} from "./WeatherHistoryCard";

function AccordionContainer({forecastData, historicData,selectedCity}) {
    return (
        <>
            <Accordion>
                <ToggleButtonsCard/>
                <WeatherForecastCard
                    forecastData={forecastData}
                    selectedCity={selectedCity}
                />
                <WeatherHistoryCard
                    historicData={historicData}
                    selectedCity={selectedCity}/>
            </Accordion>
        </>
    )
}

export default AccordionContainer;