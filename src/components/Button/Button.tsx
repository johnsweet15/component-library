import React from 'react';
import theme from '../../theme';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  mode?: 'primary' | 'secondary';
}

const Button = ({ label, children }: ButtonProps) => {
  return (
    <button style={{ backgroundColor: theme.Button?.backgroundColor }}>
      {label}
    </button>
  );
};

export default Button;
