import Link from 'next/link';
import { FC } from 'react';
import './footer.module.css';

/* eslint-disable-next-line */
export interface FooterProps {}

export const Footer: FC<FooterProps> = (props) => (
  <footer className="pb-[72px] lg:pb-0">
    <div className="border-t border-gray-300">
      <div className="container flex px-8 py-6 mx-auto">
        <div className="xl:w-8/12 md:w-12/12 sm:w-12/12 w-12/12">
          <Links />
        </div>
        <div className="xl:w-4/12 md:w-12/12 sm:w-12/12 w-12/12">
          {/* <Contact /> */}
        </div>
      </div>
    </div>
    <div className="border-t border-gray-300">
      <div className="container px-8 py-6 mx-auto">
        <CopyRight />
      </div>
    </div>
  </footer>
);

export default Footer;

const Contact: FC = () => (
  <div>
    <span className="block font-semibold">Bültenimize Kayıt Ol</span>
    <span className="block">Ratione et omnis autem occaecati et.</span>
    <input
      className="w-full border border-gray-300 rounded-full"
      type="email"
      placeholder="E-posta adresiniz."
    />
    <span className="mr-4 font-semibold">Takip Et:</span>
    <div className="flex">Social Icons</div>
  </div>
);

const CopyRight: FC = () => (
  <div className="flex items-center justify-between">
    <span className="">Bu website Krediliev.com AŞ&apos;ye aittir.</span>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="323"
      height="58.412"
      viewBox="0 0 323 58.412"
    >
      <g id="company-logo-footer" transform="translate(0.079 -5.222)">
        <text
          id="krediliev.com"
          transform="translate(95.921 46.222)"
          fill="#262626"
          fontSize="33"
          fontWeight="600"
        >
          <tspan x="0" y="0">
            krediliev.
          </tspan>
          <tspan y="0" fontWeight="400">
            com
          </tspan>
        </text>
        <g id="_01" data-name="01" transform="translate(-0.079 5.222)">
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
  </div>
);

const LinksList: FC<{
  title: string;
  links: { label: string; href: string }[];
}> = ({ title, links }) => (
  <div className="">
    <span className="block text-lg text-[#262626] font-semibold mb-6 px-1">
      {title}
    </span>
    {links.map(({ href, label }) => (
      <Link key={`label-${label}`} href={href}>
        <a className="py-2 px-1 block text-[#262626] hover:text-gray-500 text-sm font-medium rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-75">
          {label}
        </a>
      </Link>
    ))}
  </div>
);

const Links: FC = () => (
  <div className="grid w-full grid-cols-2 xl:grid-cols-4 md:grid-cols-2 sm:grid-cols-2">
    <LinksList
      title="Kurumsal"
      links={[
        { label: 'Kurumsal Üyelik', href: '/auth/register' },
        { label: 'Hakkımızda', href: '/about-us' },
        { label: 'İnsan Kaynakları', href: '#' },
        { label: 'İletişim', href: '#' },
      ]}
    />
  </div>
);
