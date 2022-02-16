import { DetailedHTMLProps, FC, HTMLAttributes } from 'react';
import './section.module.css';

/* eslint-disable-next-line */
export interface SectionProps {
  bg?: 'light' | 'dark';
  id: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>['id'];
}

export const Section: FC<SectionProps> = ({ children, bg = 'light', id }) => (
  <section
    id={id}
    key={id}
    className={`px-6 py-6 ${bg === 'dark' ? 'bg-gray-100' : ''} `}
  >
    <div className="container mx-auto">{children}</div>
  </section>
);

export default Section;
