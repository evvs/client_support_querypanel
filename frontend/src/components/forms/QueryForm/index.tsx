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

const QueryForm: React.FC = () => {
  return (
    <div className={s.container}>
      <form className={s.form}>
        <span>Add server:</span>
        <input type="text" className="input-main" placeholder="Name" />
        <div className={s.add_server_inputs}>
          <input
            type="text"
            className={`${s.host} input-main`}
            placeholder="Host"
          />
          <input
            type="text"
            className={`${s.port} input-main`}
            placeholder="Port"
          />
        </div>
        <button
          type="button"
          className={`btn btn-contained ${s['add_server-btn']}`}
        >
          Add server
        </button>
        <div>
          <span>Select server:</span>
          <Select styles={customStyles} />
          <span>Select database:</span>
          <Select styles={customStyles} />
        </div>
        <button type="button" className={`${s['execute-btn']} btn large btn-contained`}>
          Execute
          <br />
          <FontAwesomeIcon icon={faBolt} />
        </button>
      </form>
    </div>
  );
};

export default QueryForm;
