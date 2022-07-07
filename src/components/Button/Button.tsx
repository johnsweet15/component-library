import React from 'react';
import { theme } from '../Theme/Theme';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  mode?: 'primary' | 'secondary';
}

const Button = ({ label, children, style, ...props }: ButtonProps) => {
  return (
    <button style={{ ...theme.components?.Button, ...style }} {...props}>
      {label}
    </button>
  );
};

export default Button;
