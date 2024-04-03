import React from 'react';
import './Button.css';

interface ButtonProps {
  type?: 'add' | 'remove';
  title?: string;
  disabled?: boolean;
  onClick?: () => void;
}

function Button({ type, title, disabled, onClick }: ButtonProps) {
  return (
    <button
      className={`btn ${type === 'add' ? 'btn-add' : 'btn-remove'}`}
      disabled={disabled}
      onClick={onClick}
    >
      {title}
    </button>
  );
}

export default Button;
