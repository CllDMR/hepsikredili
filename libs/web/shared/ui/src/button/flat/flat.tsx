import { FC } from 'react';
import { ButtonBaseProps } from '..';
import './flat.module.css';

export interface ButtonFlatProps extends ButtonBaseProps {
  variant: 'flat';
  buttonRef?: React.ForwardedRef<HTMLButtonElement>;
}

export const ButtonFlat: FC<ButtonFlatProps> = ({
  title,
  fullWidth = false,
  buttonRef,
  onClick,
}) => (
  <button
    className={`disabled:bg-gray-500 text-indigo-400 font-semibold hover:bg-indigo-200
      min-w-[128px] transition duration-150 ease-in-out 
      focus:outline-none focus-visible:ring-2 
      focus-visible:ring-indigo-500 focus-visible:ring-opacity-75 px-4 py-2 rounded ${
        fullWidth && 'w-full'
      }`}
    ref={buttonRef}
    onClick={onClick}
  >
    <span className="whitespace-nowrap">{title}</span>
  </button>
);

export default ButtonFlat;
