/* eslint-disable react/jsx-boolean-value */
import React from 'react';
import styled from 'styled-components';
import AceEditor from 'react-ace';

import 'ace-builds/src-noconflict/mode-mysql';
import 'ace-builds/src-noconflict/theme-dracula';

const GridWrapper = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: 2fr 1fr;
`;

const AceEditorStyled = styled(AceEditor)`
  background-color: #111922;
  grid-row-start: 1;
  grid-row-end: 2;
  grid-column-start: 2;
  grid-column-end: -1;

  * {
    font-family: inherit;
  }
`;

const Query: React.FC = () => {
  function onChange() {
    console.log('change');
  }

  return (
    <GridWrapper>
      <AceEditorStyled
        mode="mysql"
        theme="dracula"
        onChange={onChange}
        name="UNIQUE_ID_OF_DIV"
        width="100%"
        height="100%"
        editorProps={{ $blockScrolling: true }}
        showPrintMargin={false}
        showGutter={true}
        fontSize="1rem"
        highlightActiveLine={true}
        tabSize={4}
        focus={true}
      />
    </GridWrapper>
  );
};

export default Query;
