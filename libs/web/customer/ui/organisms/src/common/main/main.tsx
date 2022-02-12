import { FC } from 'react';
import './main.module.css';

/* eslint-disable-next-line */
export interface MainProps {}

export const Main: FC<MainProps> = ({ children }) => (
  <main className="min-h-screen pt-24">{children}</main>
);

export default Main;
