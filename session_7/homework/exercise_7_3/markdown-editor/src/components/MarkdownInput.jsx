import styled from "styled-components";
import {Title} from "./shared/Title";
import {Container} from "./shared/Container";
import {useContext} from "react";
import editorContext from "../EditorContext";


const TextArea = styled.textarea`
  width: 100%;
  height: 100%;
  resize: none;
  border: none;
  outline: none;
  font-size: 17px;
`;

export const MarkdownInput = (props) => {
    const {setMarkdownText} = useContext(editorContext);
    const onInputChange = event => {
        const newValue = event.currentTarget.value;
        setMarkdownText(newValue);
    }
    return (
        <>
            <Container>
                <Title>Markdown Text</Title>
                <hr/>
                <TextArea onChange={onInputChange}/>
            </Container>
        </>
    );
};
