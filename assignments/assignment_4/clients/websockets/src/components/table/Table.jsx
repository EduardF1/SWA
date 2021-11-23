import React from 'react';
import {TableHeaders} from "./tablerow/TableRow";

export const Table = ({tableId, header, divId, bodyId}) =>
    (
        <div id={divId}>
            <h1>{header}</h1>
            <table id={tableId}>
                <TableHeaders/>
                <tbody id={bodyId}/>
            </table>
        </div>
    );
