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
      className="mt-1 w-full px-3 text-sm text-gray-500 border border-solid border-gray-300 rounded shadow-sm focus:border-[#664fbd] focus:ring-1 ring-[#664fbd]"
      id={name}
      {...{ ...rest, name }}
      ref={ref}
    />
    {error && <span className="block mt-1 text-sm text-red-500">{error}</span>}
  </div>
));

export default InputField;
