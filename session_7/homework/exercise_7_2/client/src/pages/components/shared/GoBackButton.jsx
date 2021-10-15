import {Button} from "@material-ui/core";
import {useHistory} from "react-router-dom";
import {GetCurrentRelativePath} from "./GetCurrentRelativePath";

const GoBackButton = () => {
    let history = useHistory();
    return (
        <>
            <Button style={GetCurrentRelativePath(window.location.href) === 'search' ?  ({backgroundColor: '#00AEAE', width: 200, marginTop:20}) : ({width: "200px", margin: "10px", backgroundColor: '#FFDEF3'})} onClick={() => history.goBack()}>Go Back</Button>
        </>
    );
};

export default GoBackButton;