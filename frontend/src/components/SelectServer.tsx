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
    marginBottom: '1rem',
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

const SelectServer: React.FC = () => {
  return (
    <>
      <h4 style={{ textAlign: 'center', marginBottom: '1rem' }}>
        Select server:
      </h4>
      <Select
        options={options}
        styles={customStyles}
      />
    </>
  );
};

export default SelectServer;
