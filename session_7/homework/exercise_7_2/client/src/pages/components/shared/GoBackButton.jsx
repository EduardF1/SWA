import {Button} from "@material-ui/core";
import {useHistory} from "react-router-dom";
import {GetCurrentRelativePath} from "./GetCurrentRelativePath";

const GoBackButton = ({buttonStyle}) => {
    let history = useHistory();
    return (
        <>
            <Button style={GetCurrentRelativePath(window.location.href) === 'search' ?  ({backgroundColor: '#00AEAE', width: 200, marginTop:20}) : (buttonStyle)} onClick={() => history.goBack()}>Go Back</Button>
        </>
    );
};

export default GoBackButton;