import { FC } from 'react';
import { HiOutlineCheckCircle, HiOutlineXCircle } from 'react-icons/hi';
import './check.module.css';

/* eslint-disable-next-line */
export interface CheckProps {
  checked: boolean;
  label: string;
}

export const Check: FC<CheckProps> = ({ checked, label }) => (
  <div className="flex">
    {checked ? (
      <HiOutlineCheckCircle className="w-5 h-5 text-indigo-700" />
    ) : (
      <HiOutlineXCircle className="w-5 h-5 text-indigo-300" />
    )}
    <span
      className={`ml-1 text-sm font-medium ${
        checked ? 'text-gray-600' : 'text-gray-400'
      }`}
    >
      {label}
    </span>
  </div>
);

export default Check;
