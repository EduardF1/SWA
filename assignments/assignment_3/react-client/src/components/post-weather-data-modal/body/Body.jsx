// 3rd Party
import Form from "react-bootstrap/Form";
import {Col, Row} from "react-bootstrap";
// Own
import {SelectType} from "../form-groups/SelectType";
import {SelectUnit} from "../form-groups/SelectUnit";
import {InputValue} from "../form-groups/InputValue";
import {SelectPlace} from "../form-groups/SelectPlace";
import {SelectDateTime} from "../form-groups/SelectDateTime";
import {SelectWindDirection} from "../form-groups/SelectWindDirection";
import {SelectPrecipitationType} from "../form-groups/SelectPrecipitationType";

export const Body = ({setPlace, setType, setDirection, setUnit, setValue, setPrecipitationType, onChange, dateTime}) =>
    (
        <>
            <Form>
                <Row>
                    <Col>
                        <SelectPlace setPlace={setPlace}/>
                        <SelectType setType={setType}/>
                        <SelectWindDirection setDirection={setDirection}/>
                    </Col>
                    <Col>
                        <SelectUnit setUnit={setUnit}/>
                        <InputValue setValue={setValue}/>
                        <SelectPrecipitationType setPrecipitationType={setPrecipitationType}/>
                    </Col>
                </Row>
                <SelectDateTime onChange={onChange} dateTime={dateTime}/>
            </Form>
        </>
    )