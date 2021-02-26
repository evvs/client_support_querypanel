import React from 'react';
import { useForm } from 'react-hook-form';

import s from './styles.module.scss';

const AddServerForm: React.FC = () => {
  return (
    <form className={s.form}>
      <span>Add server:</span>
      <input type="text" className="input-main" placeholder="Name" />
      <div className={s.host_port_inputs}>
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
        type="submit"
        className={`btn btn-contained ${s['add_server-btn']}`}
      >
        Add server
      </button>
    </form>
  );
};

export default AddServerForm;
