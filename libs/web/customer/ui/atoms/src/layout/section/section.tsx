import { DetailedHTMLProps, FC, HTMLAttributes } from 'react';
import './section.module.css';

/* eslint-disable-next-line */
export interface SectionProps {
  bg?: 'light' | 'dark';
  keyx: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>['key'];
  id: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>['id'];
}

export const Section: FC<SectionProps> = ({
  children,
  bg = 'light',
  id,
  keyx: key,
}) => (
  <section
    id={id}
    key={key}
    className={`px-6 py-6 ${bg === 'dark' ? 'bg-gray-100' : ''} `}
  >
    <div className="container mx-auto">{children}</div>
  </section>
);

export default Section;
