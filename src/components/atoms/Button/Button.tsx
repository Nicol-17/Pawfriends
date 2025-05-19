import { type ReactNode, type MouseEvent } from "react";

import { Link } from 'react-router-dom';

import "./Button.css";

type ButtonProps = {
  children: ReactNode;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  type?: "button" | "submit" | "reset" | 'link';
  className?: string;
  destiny?: string;
};

const Button = ({
  children,
  onClick,
  type = "button",
  className = "",
  destiny
}: ButtonProps) => {

  if (type === 'link') {
    return <Link
      to={`${destiny}`}
      className={`custom-button ${className}`}>
        {children}
      </Link>
  } else {
    return (
      <button
        type={type}
        onClick={onClick}
        className={`custom-button ${className}`}
      >
        {children}
      </button>
    );

  }
};

export default Button;
