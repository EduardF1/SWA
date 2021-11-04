import TableHeaderRowItem from "./TableHeaderRowItem";

function TableHeaderBase() {
    return (
        <>
            <TableHeaderRowItem label="Type"/>
            <TableHeaderRowItem label="Unit"/>
            <TableHeaderRowItem label="Date"/>
            <TableHeaderRowItem label="Place"/>
            <TableHeaderRowItem label="Precipitation Types"/>
            <TableHeaderRowItem label="Wind Directions"/>
        </>
    )
}

export default TableHeaderBase;