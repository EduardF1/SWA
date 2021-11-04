import React from "react";

import Button from "react-bootstrap/Button";

function OpenModalButton({togglePostDialog}) {
    return (
        <>
            <Button className="outline-btn" onClick={togglePostDialog}>
                Post History Data
            </Button>
        </>
    )
}

export default OpenModalButton;