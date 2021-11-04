export const TableRow = ({item, index, label}) => {
    const getSeparatedArrayElements = (arrayOfStrings) => {
        let separatedArrayOfStrings = [];
        arrayOfStrings.forEach(element => separatedArrayOfStrings.push(element + ', '));
        if(separatedArrayOfStrings[separatedArrayOfStrings.length - 1] !== undefined){
            separatedArrayOfStrings[separatedArrayOfStrings.length - 1] =
                removeLastComma(separatedArrayOfStrings[separatedArrayOfStrings.length - 1]);
        }
        return separatedArrayOfStrings;
    }

    const removeLastComma = (str) => str.replace(/,(\s+)?$/, '');

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