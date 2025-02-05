import React from 'react';
import './styles/MsgBox.css';

interface MsgBoxProps {
  message: string;
}

const MsgBox: React.FC<MsgBoxProps> = ({ message }) => {
  return <div className='info-message'>{message}</div>;
};

export default MsgBox;
