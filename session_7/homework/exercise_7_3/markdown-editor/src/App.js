import './App.css';

import {useState} from "react";

import styled from "styled-components";

import EditorContext from './EditorContext';
import {Title} from "./components/shared/Title";
import {MarkdownInput} from "./components/MarkdownInput";
import {Result} from "./components/Result";

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const EditorContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

export default function App() {
    const [markdownText, setMarkdownText] = useState('');
    const contextValue = {
        markdownText,
        setMarkdownText
    };
    return (
        <EditorContext.Provider value={contextValue}>
            <AppContainer>
                <Title>Markdown Editor</Title>
                <EditorContainer>
                    <MarkdownInput/>
                    <Result/>
                </EditorContainer>
            </AppContainer>
        </EditorContext.Provider>
    );
}
