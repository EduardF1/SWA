import React from 'react';
import {TableHeader} from "./table/TableHeader";
import {PARTS, REQUIREMENTS} from "../../utility/constants";

const Part1 = () => {
    return (
        <div>
            <h3>{PARTS[0]}</h3>
            <h6 id={PARTS[0]}>{REQUIREMENTS[0]}</h6>
                <div>
                    <table>
                        <TableHeader/>
                        <tbody id='warnings-table'/>
                    </table>
                </div>
        </div>
    );
};

export default Part1;