import {
  forwardRef,
  HTMLAttributes,
  InputHTMLAttributes,
  PropsWithChildren,
} from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import './input-field.module.css';

/* eslint-disable-next-line */
export type InputFieldProps = HTMLAttributes<HTMLInputElement> &
  InputHTMLAttributes<HTMLInputElement> &
  Partial<UseFormRegisterReturn> & {
    type?: string;
    label: string;
    error?: string;
  };

export const InputField = forwardRef<
  HTMLInputElement,
  PropsWithChildren<InputFieldProps>
>(({ name, label, className, error, ...rest }, ref) => (
  <div className={className}>
    <label htmlFor={name} className="text-sm font-medium text-gray-600 ">
      {label}
    </label>
    <input
      className="w-full px-3 py-1 mt-1 text-sm text-gray-500 border border-gray-300 border-solid rounded shadow-sm outline-none focus:border-indigo-400 focus:ring-1 ring-indigo-400"
      id={name}
      {...{ ...rest, name }}
      ref={ref}
    />
    {error && <span className="block mt-1 text-sm text-red-500">{error}</span>}
  </div>
));

export default InputField;
