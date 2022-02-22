import { FC } from 'react';
import { ButtonBaseProps } from '..';
import './outlined.module.css';

export interface ButtonOutlinedProps extends ButtonBaseProps {
  variant: 'outlined';
  buttonRef?: React.ForwardedRef<HTMLButtonElement>;
}

export const ButtonOutlined: FC<ButtonOutlinedProps> = ({
  title,
  fullWidth = false,
  buttonRef,
  disabled,
  onClick,
}) => (
  <button
    className={`disabled:bg-gray-500 text-indigo-400 font-semibold hover:bg-indigo-200
      min-w-[128px] border transition duration-150 ease-in-out 
      border-indigo-500 focus:outline-none focus-visible:ring-2 
      focus-visible:ring-indigo-500 focus-visible:ring-opacity-75 px-4 py-2 rounded ${
        fullWidth && 'w-full'
      }`}
    ref={buttonRef}
    onClick={onClick}
    disabled={disabled}
  >
    <span className="whitespace-nowrap">{title}</span>
  </button>
);

export default ButtonOutlined;
