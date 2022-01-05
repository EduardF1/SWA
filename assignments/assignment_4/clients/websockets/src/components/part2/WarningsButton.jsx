/**
 * WarningsButton component.
 * @param getWarningsSinceProp (Function)  Prop value used to get the warnings since the given date time.
 * @returns {JSX.Element} The WarningsButton component.
 * @constructor
 */
export const WarningsButton = ({getWarningsSinceProp}) => <button onClick={getWarningsSinceProp}>Get warnings since</button>;