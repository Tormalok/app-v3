import React from 'react';
import './styles/MsgBox.css';

interface MsgBoxProps {
  message: string;
  isSignedIn: boolean;
}

const MsgBox: React.FC<MsgBoxProps> = ({ message, isSignedIn }) => {
  return (
    <div className={`info-message ${isSignedIn ? 'signed-in' : 'signed-out'}`}>
      {message}
    </div>
  );
};

export default MsgBox;
