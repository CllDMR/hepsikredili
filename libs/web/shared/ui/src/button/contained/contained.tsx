import { FC } from 'react';
import { ButtonBaseProps } from '..';
import './contained.module.css';

export interface ButtonContainedProps extends ButtonBaseProps {
  variant: 'contained';
  buttonRef?: React.ForwardedRef<HTMLButtonElement>;
}

export const ButtonContained: FC<ButtonContainedProps> = ({
  title,
  fullWidth = false,
  buttonRef,
  disabled,
  onClick,
}) => (
  <button
    className={`disabled:bg-gray-500 text-white font-semibold hover:bg-indigo-600
      min-w-[128px] border transition duration-150 ease-in-out 
      border-gray-300 focus:outline-none focus-visible:ring-2 
      focus-visible:ring-indigo-500 focus-visible:ring-opacity-75 px-4 py-2 bg-indigo-500 rounded ${
        fullWidth && 'w-full'
      }`}
    ref={buttonRef}
    onClick={onClick}
    disabled={disabled}
  >
    <span className="whitespace-nowrap">{title}</span>
  </button>
);

export default ButtonContained;
