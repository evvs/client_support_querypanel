import React from 'react';
import { useForm } from 'react-hook-form';
import Select, { OptionTypeBase } from 'react-select';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt } from '@fortawesome/free-solid-svg-icons';

import s from './styles.module.scss';

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

const ExecuteQueryForm: React.FC = () => {
  return (
    <form className={s.form}>
      <span>Select server:</span>
      <Select styles={customStyles} />
      <span>Select database:</span>
      <Select styles={customStyles} />
      <button
        type="button"
        className={`${s['execute-btn']} btn large btn-contained`}
      >
        Execute
        <br />
        <FontAwesomeIcon icon={faBolt} />
      </button>
    </form>
  );
};

export default ExecuteQueryForm;
