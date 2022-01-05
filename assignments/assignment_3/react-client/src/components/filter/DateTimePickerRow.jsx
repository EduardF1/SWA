// 3rd Party
import DateTimePicker from "react-datetime-picker";

/**
 * DateTimePickerRow component function.
 * @param label (String) Filter button label.
 * @param onChange (Function) OnChange handle.
 * @param value (Date) Start or End Date.
 * @returns {JSX.Element} The DateTimePickerRow component.
 * @constructor
 */
export const DateTimePickerRow = ({label, onChange, value}) =>
    (
        <>
            <div className={label === 'Set start time' ? "row text-center mt-2" : "row text-center"}>
                <div className="offset-1 col-4 ">
                    <p>{label}</p>
                </div>
                <div className="col-7">
                    <DateTimePicker onChange={onChange} value={value}/>
                </div>
            </div>
        </>
    )