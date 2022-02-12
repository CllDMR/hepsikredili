import { FC } from 'react';
import './main.module.css';

/* eslint-disable-next-line */
export interface MainProps {}

export const Main: FC<MainProps> = ({ children }) => (
  <main className="pt-[92px] min-h-screen pb-4 bg-[#f7f7f7]">{children}</main>
);

export default Main;
