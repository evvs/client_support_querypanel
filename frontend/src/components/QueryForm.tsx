import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt } from '@fortawesome/free-solid-svg-icons';

import MainBtn from './buttons/MainBtn';
import MainInput from './inputs/MainInput';
import SelectServer from './SelectServer';
import SelectDatabase from './SelectDatabase';

const Form = styled.form`
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-column-gap: 1rem;
  grid-row-gap: 2rem;
  padding: 1rem;
`;

const InputsWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const SelectServerWrapper = styled.div`
  display: flex;
  flex-direction: column;

  align-self: end;
`;

const ServerButtonsWrapper = styled.div`
  align-self: end;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const GetDBListBtn = styled(MainBtn)`
  padding: 0.7rem 2.5rem;
`;

const ExecuteQueryBtn = styled(MainBtn)`
  align-self: start;
  padding: 1rem;
`;

const QueryFrom: React.FC = () => {
  return (
    <Form>
      <SelectServerWrapper>
        <SelectServer />
        <MainInput
          type="text"
          placeholder="Name"
          style={{ marginBottom: '1rem' }}
        />
        <InputsWrapper>
          <MainInput type="text" placeholder="Host" style={{ width: '50%' }} />
          <MainInput type="text" placeholder="Port" style={{ width: '25%' }} />
        </InputsWrapper>
      </SelectServerWrapper>
      <ServerButtonsWrapper>
        <MainBtn
          size="s"
          style={{ marginBottom: '1rem' }}
        >
          Save
        </MainBtn>
        <GetDBListBtn size="m">Connect</GetDBListBtn>
      </ServerButtonsWrapper>
      <SelectDatabase />

      <ExecuteQueryBtn size="l">
        Execute
        <br />
        <FontAwesomeIcon icon={faBolt} />
      </ExecuteQueryBtn>
    </Form>
  );
};

export default QueryFrom;
