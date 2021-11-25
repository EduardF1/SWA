import React from 'react';
import {TABLE_ROW_LABELS} from "../../../utility/constants";
import './TableRow.css';

export const TableHeaders = () => (<thead><><tr>{TABLE_ROW_LABELS.map((label, index) => <td key={index}><b>{label}</b></td>)}</tr></></thead>);