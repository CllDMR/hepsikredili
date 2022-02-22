import { Section } from '@hepsikredili/web/customer/ui/atoms';
import { FC } from 'react';
import './how-it-works.module.css';

/* eslint-disable-next-line */
export interface SectionMainHowItWorksProps {}

export const SectionMainHowItWorks: FC<SectionMainHowItWorksProps> = () => (
  <Section id="section-main-how-it-works">
    <h1 className="mb-5 text-3xl text-center">
      <span className="font-semibold">Sistem nasıl çalışır ?</span>
    </h1>

    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      <div className="px-3 py-2 bg-white border border-gray-100 rounded shadow">
        <p className="text-base text-gray-700">
          1 - Siz, Gayrimenkul danışmanlarının ilanlarından istediğiniz evi
          seçersiniz.
        </p>
      </div>

      <div className="px-3 py-2 bg-white border border-gray-100 rounded shadow">
        <p className="text-base text-gray-700">
          2 - Gayrimenkul danışmanınız size evi gösterir.
        </p>
      </div>

      <div className="px-3 py-2 bg-white border border-gray-100 rounded shadow">
        <p className="text-base text-gray-700">
          3 - Beğendiğiniz ev için kredi başvurusunda bulunursunuz.
        </p>
      </div>

      <div className="px-3 py-2 bg-white border border-gray-100 rounded shadow">
        <p className="text-base text-gray-700">
          4 - Başvurunuz tarafımızdan değerlendirilir.
        </p>
      </div>

      <div className="px-3 py-2 bg-white border border-gray-100 rounded shadow">
        <p className="text-base text-gray-700">
          5 - Findeks notunuza ya da Kredi notunuza BAKILMAZ.
        </p>
      </div>

      <div className="px-3 py-2 bg-white border border-gray-100 rounded shadow">
        <p className="text-base text-gray-700">
          6 - Çıkan eksper değeri üzerinden %70 kredi kullanmanız için onay
          alırsınız.
        </p>
      </div>

      <div className="px-3 py-2 bg-white border border-gray-100 rounded shadow">
        <p className="text-base text-gray-700">
          7 - Alınan onayın ardından beğendiğiniz ev tarafımızdan satın alınır.
        </p>
      </div>

      <div className="px-3 py-2 bg-white border border-gray-100 rounded shadow">
        <p className="text-base text-gray-700">
          8 - Tarafımızdan satın alınan eviniz tapudan alınan randevunun
          ardından size verilir.
        </p>
      </div>

      <div className="px-3 py-2 bg-white border border-gray-100 rounded shadow">
        <p className="text-base text-gray-700">
          9 - Siz yeni evinizde rahat rahat otururken, KİRA öder gibi senet
          ödemelerinizi yaparak EV SAHİBİ olursunuz.
        </p>
      </div>
    </div>
  </Section>
);

export default SectionMainHowItWorks;
