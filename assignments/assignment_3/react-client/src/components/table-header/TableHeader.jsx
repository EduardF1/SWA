import {TableHeaderRowItem} from "./TableHeaderRowItem";
import {TableHeaderBase} from "./TableHeaderBase";
import {FROM_AND_TO_LABELS, VALUE_LABEL} from "../../assets/Constants";

export const TableHeader = ({label}) =>
    (
        <thead className="text-center">
            <tr>
                {
                    (label === "History") ? (
                        <TableHeaderRowItem label={VALUE_LABEL}/>
                    ) : (
                        <>
                            <TableHeaderRowItem label={FROM_AND_TO_LABELS[0]}/>
                            <TableHeaderRowItem label={FROM_AND_TO_LABELS[1]}/>
                        </>
                    )
                }
                <TableHeaderBase/>
            </tr>
        </thead>
    );