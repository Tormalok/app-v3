import React from 'react';
import Question from './Question';
import './styles/FormBox.css';

const FormBox: React.FC = () => {
  return (
    <div className='fbox-main'>
      <Question />
    </div>
  );
};

export default FormBox;
