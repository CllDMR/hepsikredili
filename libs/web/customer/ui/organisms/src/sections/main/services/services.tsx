import { Section } from '@hepsikredili/web/customer/ui/atoms';
import { FC } from 'react';
import './services.module.css';

/* eslint-disable-next-line */
export interface SectionMainServicesProps {}

export const SectionMainServices: FC<SectionMainServicesProps> = () => (
  <Section id="section-main-services" bg="dark">
    <h1 className="mb-5 text-3xl text-center">
      <span className="font-semibold">Neden Krediliev.com</span>
    </h1>

    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      <div className="px-3 py-2 bg-white border border-gray-100 rounded shadow">
        <p className="text-base text-gray-700">
          Kredi notuna bakılmaksızın senetli satış yöntemi ile ev sahibi
          olursunuz.
        </p>
      </div>

      <div className="px-3 py-2 bg-white border border-gray-100 rounded shadow">
        <p className="text-base text-gray-700">
          Düşük FAİZ oranları ile kredinizi kira öder gibi öderseniz.
        </p>
      </div>

      <div className="px-3 py-2 bg-white border border-gray-100 rounded shadow">
        <p className="text-base text-gray-700">
          Uzun vadeli düşük taksitli kredi avantajlarından faydalanırsınız.
        </p>
      </div>
    </div>
  </Section>
);

export default SectionMainServices;
