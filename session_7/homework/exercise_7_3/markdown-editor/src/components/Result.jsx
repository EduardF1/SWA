import ReactMarkdown from "react-markdown";
import {useContext} from "react";

import styled from "styled-components";

import {Container} from "./shared/Container";
import {Title} from "./shared/Title";
import editorContext from "../EditorContext";

const ResultArea = styled.div`
  width: 100%;
  height: 100%;
  border: none;
  font-size: 1rem;
`;

export const Result = (props) => {
    const {markdownText} = useContext(editorContext);
    return (
        <Container>
            <Title>Converted Text</Title>
            <hr/>
            <ResultArea>
                <ReactMarkdown children={markdownText}/>
            </ResultArea>
        </Container>
    );
};