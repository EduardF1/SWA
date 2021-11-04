import TableHeaderRowItem from "./TableHeaderRowItem";
import TableHeaderBase from "./TableHeaderBase";

function TableHeader({label}) {
    return (
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
}

export default TableHeader;