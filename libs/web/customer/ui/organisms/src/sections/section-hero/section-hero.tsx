import { Listbox, Transition } from '@headlessui/react';
import { Button } from '@hepsikredili/web/shared/ui';
import Image from 'next/image';
import Link from 'next/link';
import { FC, Fragment, useState } from 'react';
import { HiCheck } from 'react-icons/hi';
import './section-hero.module.css';

/* eslint-disable-next-line */
export interface SectionHeroProps {
  bgImg: StaticImageData;
}

export const SectionHero: FC<SectionHeroProps> = ({ bgImg }) => (
  <section
    key="section-hero"
    id="section-hero"
    className="relative"
    style={{
      minHeight: 'calc( 100vh - 96px )',
    }}
  >
    <Image
      layout="fill"
      src={bgImg}
      alt="Background Desktop"
      priority
      objectFit="cover"
      objectPosition="top center"
      placeholder="blur"
    />
    <div className="absolute inset-0 px-6 py-10 ">
      <div className="container z-10 flex flex-col w-full h-full max-w-5xl mx-auto">
        <div className="mt-10">
          <h1 className="text-5xl text-center">
            <span className="font-bold">Findeks Yok </span>
            Kredi Notu Yok
          </h1>
        </div>
        <div className="flex items-center h-full center">
          <SearchPaper />
        </div>
      </div>
    </div>
  </section>
);

export default SectionHero;

const SearchPaper: FC = () => (
  <div className="w-full p-4 bg-white rounded-md shadow-lg ">
    <div className="grid grid-cols-2 gap-4 xl:grid-cols-3 md:grid-cols-4 sm:grid-cols-2 ">
      <div className="">
        <ListBox options={['Satılık', 'Kiralık']} />
      </div>
      <div className="">
        <ListBox
          options={[
            'Daire',
            'Residence',
            'Müstakil Ev',
            'Villa',
            'Çiftlik Evi',
            'Köşk & Konak',
            'Yalı',
            'Yalı Dairesi',
            'Yazlık',
            'Prefabrik Ev',
            'Kooperatif',
          ]}
        />
      </div>
      <div className="">
        <ListBox options={['Tümü', 'İstanbul', 'Ankara', 'İzmir']} />
      </div>
      <div className="">
        <ListBox options={['Beşiktaş', 'Kadıköy', 'Eminönü', 'Sarıyer']} />
      </div>
      <div className="">
        <ListBox options={['Hamidiye Mah.', 'Levent Mah.', 'Gayrettepe']} />
      </div>
    </div>

    <div className="flex justify-end mt-5">
      <Link href="/ads" passHref>
        <Button variant="contained" title="Ara" />
      </Link>
    </div>
  </div>
);

const ListBox: FC<{ options: string[] }> = ({ options }) => {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div className="w-full">
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative">
          <Listbox.Button className="relative w-full py-2 pl-3 pr-10 h-[50px] text-left border border-gray-200 rounded-lg  cursor-default focus:outline-none sm:text-sm">
            <span className="block truncate">{selected}</span>
            <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                viewBox="0 0 20 20"
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
            <Listbox.Options className="absolute z-10 w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {options.map((option, optionIdx) => (
                <Listbox.Option
                  key={optionIdx}
                  className={({ active }) =>
                    `${
                      active ? 'text-indigo-900 bg-indigo-100' : 'text-gray-900'
                    }
                          cursor-default select-none relative py-2 pl-10 pr-4`
                  }
                  value={option}
                >
                  {({ selected, active }) => (
                    <>
                      <span
                        className={`${
                          selected ? 'font-medium' : 'font-normal'
                        } block truncate`}
                      >
                        {option}
                      </span>
                      {selected ? (
                        <span
                          className={`${
                            active ? 'text-indigo-600' : 'text-indigo-600'
                          }
                                absolute inset-y-0 left-0 flex items-center pl-3`}
                        >
                          <HiCheck className="w-5 h-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};
