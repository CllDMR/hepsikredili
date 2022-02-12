import {
  forwardRef,
  HTMLAttributes,
  InputHTMLAttributes,
  PropsWithChildren,
} from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import './input-check.module.css';

/* eslint-disable-next-line */
export type InputCheckProps = HTMLAttributes<HTMLInputElement> &
  InputHTMLAttributes<HTMLInputElement> &
  Partial<UseFormRegisterReturn> & {
    label: string;
  };

export const InputCheck = forwardRef<
  HTMLInputElement,
  PropsWithChildren<InputCheckProps>
>(({ name, label, className, ...rest }, ref) => (
  <div className={className}>
    <label className="inline-flex items-center ">
      <input
        id={name}
        {...{ ...rest, name }}
        ref={ref}
        type="checkbox"
        className="text-indigo-600 rounded"
      />
      <span className="ml-2 text-sm text-gray-600 select-none hover:underline">
        {label}
      </span>
    </label>
  </div>
));

export default InputCheck;
