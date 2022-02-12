import { Listbox, Transition } from '@headlessui/react';
import React, { Fragment } from 'react';
import './select.module.css';

type Option = {
  label: string;
  value: string | number;
};

/* eslint-disable-next-line */
export type SelectProps = {
  className?: string;
  label: string;
  options: Option[];
  value: Option['value'];
  onBlur: () => void;
  onChange: (...event: unknown[]) => void;
};

type SelectState = {
  selected: Option;
};

export class Select extends React.Component<SelectProps, SelectState> {
  override render() {
    const {
      className,
      label: selectLabel,
      options,
      onChange,
      value,
    } = this.props;
    const selectedOption =
      this.props.options.find((e) => e.value === value) ??
      this.props.options[0];

    return (
      <div className={`w-full ${className}`}>
        <Listbox
          value={selectedOption.value}
          onChange={(value) => {
            onChange(value);
          }}
        >
          <Listbox.Label className="text-sm font-medium text-gray-600 ">
            {selectLabel}
          </Listbox.Label>

          <div className="relative mt-1">
            <Listbox.Button className="relative w-full py-2 pl-3 text-left text-gray-500 border focus:outline-none border-solid border-gray-300 rounded shadow-sm focus:border-[#664fbd] focus:ring-1 ring-[#664fbd] cursor-default pr-7 ">
              <span className="block text-sm text-gray-600 truncate">
                {selectedOption.label}
              </span>
              <span className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </Listbox.Button>
            <Transition
              as={Fragment}
              enter="transition duration-100 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <Listbox.Options className="absolute left-0 right-0 z-10 w-full mt-2 overflow-auto text-sm bg-white rounded shadow ring-1 ring-black ring-opacity-5 focus:outline-none">
                {options.map(({ label, value }, optionIdx) => (
                  <Listbox.Option
                    key={optionIdx}
                    className={({
                      active,
                      selected,
                    }) => `cursor-default select-none relative py-2 px-3  
                    ${selected ? '' : ''}
                    ${active ? 'bg-indigo-200' : ''}
                    `}
                    value={value}
                  >
                    {({ selected, active }) => (
                      <span
                        className={`block truncate font-normal text-gray-600 text-sm 
                        ${selected ? '' : ''}
                        ${active ? 'text-gray-700' : ''}
                        `}
                      >
                        {label}
                      </span>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </Listbox>
      </div>
    );
  }
}

export default Select;
