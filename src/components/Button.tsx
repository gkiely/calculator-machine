import React from 'react';

import { Location } from '../utils/types';
import { buttonClass, getButtonColorClass, getContainerWidthClass, containerClass } from '../styles';

interface ComponentProps {
  containerClassName?: string;
  className?: string;
  key: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  children?: React.ReactChild;
}

export const Button = ({ containerClassName, className, key, onClick, children }: ComponentProps) => {
  return (
    <div className={containerClassName}>
      <button key={key} onClick={(e) => onClick(e)} className={className}>
        {children}
      </button>
    </div>
  );
};

export interface ButtonProps {
  id: string;
  text: string;
  routeParam?: string;
  operation?: boolean;
  wide?: boolean;
  location: Location;
}

const ButtonContainer = ({
  id,
  text,
  routeParam = 'input',
  operation = false,
  wide = false,
  location,
}: ButtonProps) => {
  if (text === 'AC') {
    console.log('render');
  }
  return (
    <Button
      key={id}
      onClick={() => {
        location.update((prev) => ({
          [routeParam]: prev[routeParam] ? prev[routeParam] + text : text,
        }));
      }}
      containerClassName={`${containerClass} ${getContainerWidthClass(wide)}`}
      className={`${buttonClass} ${getButtonColorClass(operation)}`}
    >
      {text}
    </Button>
  );
};

export default ButtonContainer;
