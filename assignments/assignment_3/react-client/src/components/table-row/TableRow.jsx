function TableRow({item, index, label}) {
    function getSeparatedArrayElements(arrayOfStrings) {
        let separatedArrayOfStrings = [];
        arrayOfStrings.forEach(element => separatedArrayOfStrings.push(element + ', '));
        if(separatedArrayOfStrings[separatedArrayOfStrings.length - 1] !== undefined){
            separatedArrayOfStrings[separatedArrayOfStrings.length - 1] =
                removeLastComma(separatedArrayOfStrings[separatedArrayOfStrings.length - 1]);
        }
        return separatedArrayOfStrings;
    }

    function removeLastComma(str) {
        return str.replace(/,(\s+)?$/, '');
    }

    return (
        <tr key={index}>
            {
                (label === "History") ? (
                    <>
                        <td>{item.value}</td>
                        <td>{item.type}</td>
                        <td>{item.unit}</td>
                        <td>{item.time}</td>
                        <td>{item.place}</td>
                        <td>{item.precipitation_type ? item.precipitation_type : '-'}</td>
                        <td>{item.direction  ? item.direction : '-'}</td>
                    </>
                ) : (
                    <>
                        <td>{item.from}</td>
                        <td>{item.to}</td>
                        <td>{item.type}</td>
                        <td>{item.unit}</td>
                        <td>{item.time}</td>
                        <td>{item.place}</td>
                        <td>{item.precipitation_types ? getSeparatedArrayElements(item.precipitation_types) : '-'}</td>
                        <td>{item.directions ? getSeparatedArrayElements(item.directions) : '-'}</td>
                    </>
                )
            }
        </tr>
    )
}

export default TableRow;