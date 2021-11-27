import React from 'react';
import {TABLE_COLUMN_LABELS} from "../../utility/constants";

export const TableHeader = () => (
        <thead>
            <tr>
                {TABLE_COLUMN_LABELS.map((label, index) => <th key={index}>{label}</th>)}
            </tr>
        </thead>
);
