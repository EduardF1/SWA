/**
 * Wrapper (multiple inheritance) for Event and DataType, constructor function for
 * the EventDataType class (aggregate class of the Event and DataType classes).
 * @param time (Date) The time at which a measurement has occurred.
 * @param place (String) The place at which a measurement has occurred.
 * @param type (String) The type of the measurement which has occurred.
 * @param unit (String) The unit of the measurement which has occurred.
 * @constructor
 */
export function EventDataType(time, place, type, unit) {
    this.time = time;
    this.place = place;
    this.type = type;
    this.unit = unit;
}

/**
 * The prototype of the EventDataType "class", all subclasses will inherit the below methods.
 * @type {
 *          {
 *              getType: (function(): *),
 *              getTime: (function(): *),
 *              getPlace: (function(): *),
 *              setType: EventDataType.setType,
 *              setTime: EventDataType.setTime
 *           }
 *        }
 */
EventDataType.prototype = {
    getPlace: function () {
      return this.place;
    },
    setTime: function (newTime) {
        this.time = newTime;
    },
    getTime: function () {
        return this.time;
    },
    setType: function (newType) {
        this.type = newType;
    },
    getType: function () {
        return this.type;
    }
}