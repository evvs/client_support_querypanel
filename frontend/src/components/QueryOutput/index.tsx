import React from 'react';

import s from './styles.module.scss';

const QueryOutput: React.FC = () => {
  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <p className={s.text}>Ready to execute query</p>
        <div className="lds-heart">
          <div />
        </div>
      </div>
    </div>
  );
};

export default QueryOutput;
