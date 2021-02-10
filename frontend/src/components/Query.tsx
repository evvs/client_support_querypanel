/* eslint-disable react/jsx-boolean-value */
import React, { useState } from 'react';
import styled from 'styled-components';
import AceEditor from 'react-ace';
import { useDispatch, useSelector } from 'react-redux';

import 'ace-builds/src-noconflict/mode-mysql';
import 'ace-builds/src-noconflict/theme-dracula';

import { updateQuery } from '../redux-slices/querySlice';
import { RootState } from '..';

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
  const { queryInput } = useSelector((state: RootState) => state.query);

  const dispatch = useDispatch();
  const [queryValue, setQueryValue] = useState<string>(queryInput);

  const onChangeHandler = (value: string) => {
    setQueryValue(value);
  };

  const onBlurHandler = () => {
    dispatch(updateQuery(queryValue));
  };

  return (
    <GridWrapper>
      <AceEditorStyled
        mode="mysql"
        theme="dracula"
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
        onChange={onChangeHandler}
        value={queryValue}
        onBlur={onBlurHandler}
      />
    </GridWrapper>
  );
};

export default Query;
