// React
import React, {useRef} from 'react';
// 3rd Party
import 'ag-grid-community/dist/styles/ag-grid.css';
import {AgGridColumn, AgGridReact} from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
// Own
import {WarningsButton} from "./WarningsButton";
import {DEFAULT_DATE, LABELS, PARTS, REQUIREMENTS} from "../../utility/constants";

/**
 * Part2 component.
 * @param getWarningsSinceProp (Function)  Prop value used to get the warnings since the given date time.
 *                              Passed further to the "WarningsButton" component.
 * @param rowData (Array of objects) Prop used for the values of the grid rows.
 * @returns {JSX.Element} The Part2 component.
 * @constructor
 */
export const Part2 = ({getWarningsSinceProp, rowData}) => {

    const gridRef = useRef();

    if (gridRef.current && rowData.length !== 0) {
        const index = rowData.length - 1;
        setTimeout(() => {
            gridRef.current.api.ensureIndexVisible(index, 'bottom');
        },1000)
    }

    return (
        <div className={'partTwo'}>
            <h3>{PARTS[1]}</h3>
            <h5 id={PARTS[1]}>{REQUIREMENTS[1]}</h5>
            <div className={'warningsButton'}>
                {LABELS[0]}
                <input type='datetime-local' id='local-date' defaultValue={DEFAULT_DATE}/>
                <WarningsButton getWarningsSinceProp={getWarningsSinceProp}/>
            </div>
            <div className="ag-theme-alpine" style={{height: 400, width: '90vw'}}>
                <AgGridReact
                    ref={gridRef}
                    defaultColDef={{
                        flex: 1,
                        resizable: true
                    }}
                    gridOptions={ {suppressScrollOnNewData: true} }
                    debounceVerticalScrollbar={true}
                    columnHoverHighlight={true}
                    rowData={rowData}
                >
                    <AgGridColumn field="id" maxWidth={70}/>
                    <AgGridColumn field="severity" maxWidth={90}/>
                    <AgGridColumn field="from" maxWidth={70}/>
                    <AgGridColumn field="to" maxWidth={70}/>
                    <AgGridColumn field="type" maxWidth={120}/>
                    <AgGridColumn field="unit" maxWidth={70}/>
                    <AgGridColumn field="time" maxWidth={200}/>
                    <AgGridColumn field="place" maxWidth={120}/>
                    <AgGridColumn field="precipitation_types" maxWidth={170}/>
                    <AgGridColumn field="directions"/>
                </AgGridReact>
            </div>
        </div>
    );
};