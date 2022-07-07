import React from 'react';
import { theme } from '../Theme/Theme';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  mode?: 'primary' | 'secondary';
}

const Button = ({ label, children }: ButtonProps) => {
  return (
    <button
      style={{ backgroundColor: theme.components?.Button?.backgroundColor }}
    >
      {label}
    </button>
  );
};

export default Button;
