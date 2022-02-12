import { FC } from 'react';
import './switch.module.css';

type SwitchSideType = 'left' | 'right';

/* eslint-disable-next-line */
export interface SwitchProps {
  side: SwitchSideType;
  leftLabel: string;
  rightLabel: string;
  onSelectLeft: () => void;
  onSelectRight: () => void;
}

export const Switch: FC<SwitchProps> = ({
  side,
  leftLabel,
  rightLabel,
  onSelectLeft,
  onSelectRight,
}) => (
  <div className="inline-flex items-center px-3 py-2 border-2 border-gray-300 rounded">
    <button
      className={`text-sm font-medium text-gray-500  ${
        side === 'left' ? 'text-indigo-500' : ''
      } `}
      onClick={() => onSelectLeft()}
    >
      {leftLabel}
    </button>
    <svg
      className="mx-3"
      width="2"
      height="15"
      viewBox="0 0 2 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M1 0V22" stroke="#C4C4C4" />
    </svg>
    <button
      className={`text-sm font-medium text-gray-500  ${
        side === 'right' ? 'text-indigo-500' : ''
      } `}
      onClick={() => onSelectRight()}
    >
      {rightLabel}
    </button>
  </div>
);

export default Switch;
