// Own
import {IDENTIFIERS, NOT_APPLICABLE} from "../../assets/Constants";

/**
 * TableRow component function, used to render each table row for the historic of forecast data tables.
 * @param item (Object) Prop used to access the data that will be the content of the table cells.
 * @param index (Number) Prop used to set the key of the rendered rows.
 * @param label (String) Prop used to check for which table the row is rendered, this is
 *              conditional rendering flag, if the value of "label" is "History", 7 cells will be rendered as part of the row,
 *              otherwise 8 ("Forecast").
 * @returns {JSX.Element} The TableRow component.
 * @constructor
 */
export const TableRow = ({item, index, label}) => {
    /**
     * Helper function used to add commas between the precipitation types or directions and
     * remove the last comma.
     * @param arrayOfStrings (Array of Strings) Precipitation types or directions (ex.: ['rain', 'hail', 'snow']).
     * @returns {*[]} (Array of Strings) Precipitation types or directions, comma-separated (ex.: ['rain, ', 'hail, ', 'snow']).
     */
    const getSeparatedArrayElements = (arrayOfStrings) => {
        let separatedArrayOfStrings = [];
        arrayOfStrings.forEach(element => separatedArrayOfStrings.push(element + ', '));
        if(separatedArrayOfStrings[separatedArrayOfStrings.length - 1] !== undefined){
            separatedArrayOfStrings[separatedArrayOfStrings.length - 1] =
                removeLastComma(separatedArrayOfStrings[separatedArrayOfStrings.length - 1]);
        }
        return separatedArrayOfStrings;
    }

    /**
     * Helper function to remove the trailing comma using a regex expression.
     * @param str (String) String from which the last comma should be removed.
     */
    const removeLastComma = (str) => str.replace(/,(\s+)?$/, '');

    return (
        <tr key={index}>
            {
                (label === IDENTIFIERS[0]) ? (
                    <>
                        <td>{item.value}</td>
                        <td>{item.type}</td>
                        <td>{item.unit}</td>
                        <td>{item.time}</td>
                        <td>{item.place}</td>
                        <td>{item.precipitation_type ? item.precipitation_type : NOT_APPLICABLE}</td>
                        <td>{item.direction  ? item.direction : NOT_APPLICABLE}</td>
                    </>
                ) : (
                    <>
                        <td>{item.from}</td>
                        <td>{item.to}</td>
                        <td>{item.type}</td>
                        <td>{item.unit}</td>
                        <td>{item.time}</td>
                        <td>{item.place}</td>
                        <td>{item.precipitation_types ? getSeparatedArrayElements(item.precipitation_types) : NOT_APPLICABLE}</td>
                        <td>{item.directions ? getSeparatedArrayElements(item.directions) : NOT_APPLICABLE}</td>
                    </>
                )
            }
        </tr>
    )
}