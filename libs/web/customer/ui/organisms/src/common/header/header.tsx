/* eslint-disable jsx-a11y/anchor-is-valid */
import { Button } from '@hepsikredili/web/shared/ui';
import Link from 'next/link';
import { FC } from 'react';
import './header.module.css';

/* eslint-disable-next-line */
export interface HeaderProps {}

export const Header: FC<HeaderProps> = (props) => (
  <header>
    <nav className="fixed top-0 left-0 right-0 z-50 hidden w-full h-24 bg-white border-b border-gray-300 shadow-sm lg:block">
      <div className="container flex items-center justify-between h-full px-6 mx-auto">
        <div className="rounded focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-opacity-75">
          <Link href="/">
            <a className="focus:outline-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="223"
                height="58.412"
                viewBox="0 0 323 58.412"
              >
                <g id="header-logo" transform="translate(0.079 -5.222)">
                  <text
                    id="krediliev.com"
                    transform="translate(95.921 46.222)"
                    fill="#262626"
                    fontSize="33"
                    fontFamily="Poppins-SemiBold, Poppins"
                    fontWeight="600"
                  >
                    <tspan x="0" y="0">
                      krediliev.
                    </tspan>
                    <tspan
                      y="0"
                      fontFamily="Poppins-Regular, Poppins"
                      fontWeight="400"
                    >
                      com
                    </tspan>
                  </text>
                  <g
                    id="_01"
                    data-name="01"
                    transform="translate(-0.079 5.222)"
                  >
                    <path
                      id="Path_18910"
                      data-name="Path 18910"
                      d="M271.193,198.267l-26.9,26.9-11.115-11.115-9.552,9.552,20.668,20.667,36.453-36.45Z"
                      transform="translate(-196.724 -185.858)"
                      fill="#6c46b9"
                    />
                    <path
                      id="Path_18911"
                      data-name="Path 18911"
                      d="M206.532,173.568l-16.462,16.46v-5.152H181.05v14.173l-10.971,10.97,9.554,9.553,26.9-26.9,11.114,11.114,9.552-9.552Z"
                      transform="translate(-170.079 -173.568)"
                      fill="#262626"
                    />
                  </g>
                </g>
              </svg>
            </a>
          </Link>
        </div>
        <div className="grid grid-flow-col grid-rows-1 gap-3">
          <Link href="/auth/login" passHref>
            <button className="flex items-center px-2 py-1 text-gray-500 transition duration-150 ease-in-out border-b border-solid hover:text-gray-700 hover:border-solid focus:text-gray-700 hover:border-current focus:border-current focus:outline-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              <span className="text-sm whitespace-nowrap">
                Giriş Yap / Üye Ol
              </span>
            </button>
          </Link>
          <Link href="/#" passHref>
            <Button title="Ücretsiz İlan Ver" variant="contained" />
          </Link>
        </div>
      </div>
    </nav>
  </header>
);

export default Header;
