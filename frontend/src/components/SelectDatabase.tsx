import React from 'react';
import styled from 'styled-components';
import Select, { OptionTypeBase } from 'react-select';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

const customStyles = {
  control: (base: OptionTypeBase) => ({
    ...base,
    background: '#111922',
    border: 'none',
  }),
  option: (base: OptionTypeBase) => ({
    ...base,
    color: 'black',
  }),

  singleValue: (base: OptionTypeBase) => ({
    ...base,
    color: 'white',
  }),
};

const Wrapper = styled.div`
  grid-row-start: 2;
  grid-row-end: 3;

  grid-column-start: 1;
  grid-column-end: 2;

  border-top: 1px solid #282a36;
  padding-top: 0.5rem;
`;

const SelectDatabase: React.FC = () => {
  return (
    <Wrapper>
      <h4 style={{ marginBottom: '1rem', textAlign: 'center' }}>
        Select database:
      </h4>
      <Select options={options} styles={customStyles} />
    </Wrapper>
  );
};

export default SelectDatabase;
