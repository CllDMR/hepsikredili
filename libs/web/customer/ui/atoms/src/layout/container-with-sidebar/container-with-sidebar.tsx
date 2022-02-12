import { FC } from 'react';
import './container-with-sidebar.module.css';

/* eslint-disable-next-line */
export interface ContainerWithSidebarProps {}

export const ContainerWithSidebar: FC<ContainerWithSidebarProps> = ({
  children,
}) => (
  <div
    className="grid items-start"
    style={{
      gridTemplateColumns: '250px auto',
      gap: '16px',
    }}
  >
    {children}
  </div>
);

export default ContainerWithSidebar;
