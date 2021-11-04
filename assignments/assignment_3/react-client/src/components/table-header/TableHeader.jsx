import {TableHeaderRowItem} from "./TableHeaderRowItem";
import {TableHeaderBase} from "./TableHeaderBase";

export const TableHeader = ({label}) =>
    (
        <thead className="text-center">
            <tr>
                {
                    (label === "History") ? (
                        <TableHeaderRowItem label="Value"/>
                    ) : (
                        <>
                            <TableHeaderRowItem label="From"/>
                            <TableHeaderRowItem label="To"/>
                        </>
                    )
                }
                <TableHeaderBase/>
            </tr>
        </thead>
    );