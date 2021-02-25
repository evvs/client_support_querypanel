import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-mysql';
import 'ace-builds/src-noconflict/theme-dracula';

import s from './styles.module.scss';
import { updateQuery } from '../../../redux-slices/querySlice';
import { RootState } from '../../../index';
import QueryForm from '../../forms/QueryForm';

const QueryTab: React.FC = () => {
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
    <div className={s.grid_container}>
      <QueryForm />
      <AceEditor
        className={s['query-editor']}
        mode="mysql"
        theme="dracula"
        name="UNIQUE_ID_OF_DIV"
        width="100%"
        height="100%"
        editorProps={{ $blockScrolling: true }}
        showPrintMargin={false}
        showGutter
        fontSize="1rem"
        highlightActiveLine
        tabSize={4}
        focus
        onChange={onChangeHandler}
        value={queryValue}
        onBlur={onBlurHandler}
      />
    </div>
  );
};

export default QueryTab;
