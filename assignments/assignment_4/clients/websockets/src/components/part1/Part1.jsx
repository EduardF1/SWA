// React
import React, {useRef} from 'react';
// 3rd Party
import 'ag-grid-community/dist/styles/ag-grid.css';
import {AgGridColumn, AgGridReact} from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
// Own
import {PARTS, REQUIREMENTS} from "../../utility/constants";

/**
 * Part1 component.
 * @param rowData (Array of objects) Prop used for the values of the grid rows.
 * @returns {JSX.Element} The Part1 component.
 * @constructor
 */
export const Part1 = ({rowData}) => {

    const gridRef = useRef();

    if (gridRef.current && rowData.length !== 0) {
        const index = rowData.length - 1;
        setTimeout(() => {
            gridRef.current.api.ensureIndexVisible(index, 'bottom');
        },1000)
    }

    return (
        <div>
            <h2>4.2 Websocket</h2>
            <h3>{PARTS[0]}</h3>
            <h5 id={PARTS[0]}>{REQUIREMENTS[0]}</h5>
            <div className="ag-theme-alpine" style={{height: 600, width: '90vw'}}>
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