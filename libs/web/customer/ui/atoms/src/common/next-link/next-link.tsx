import Link, { LinkProps } from 'next/link';
import { FC } from 'react';
import './next-link.module.css';

/* eslint-disable-next-line */
export interface NextLinkProps extends LinkProps {
  href: string;
  className?: string;
}

/**
 * Standard way of using the Next's `Link` tag together with the `a` tag
 */
export const NextLink: FC<NextLinkProps> = ({
  href,
  className,
  children,
  ...rest
}) => (
  <Link href={href} {...rest}>
    <a href={href} className={className}>
      {children}
    </a>
  </Link>
);

export default NextLink;
