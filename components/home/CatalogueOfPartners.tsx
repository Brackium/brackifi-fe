import { Catalogue } from '@/types';
import React from 'react';

const catalogueData: Catalogue[] = [
  {
    title: 'Real Estate',
    text1:
      'We help you invest and manage your money into a portfolio of expertly selected US stocks based on their long-term growth opportunities and quality earnings ',
    text2:
      'Our portfolio is made up of heavyweights like Google, Alibaba, Apple, Tesla and many more.',
  },
  {
    title: 'Real Estate',
    text1:
      'We help you invest and manage your money into a portfolio of expertly selected US stocks based on their long-term growth opportunities and quality earnings ',
    text2:
      'Our portfolio is made up of heavyweights like Google, Alibaba, Apple, Tesla and many more.',
  },
  {
    title: 'Real Estate',
    text1:
      'We help you invest and manage your money into a portfolio of expertly selected US stocks based on their long-term growth opportunities and quality earnings ',
    text2:
      'Our portfolio is made up of heavyweights like Google, Alibaba, Apple, Tesla and many more.',
  },
];

const CatalogueOfPartners = () => {
  return (
    <section className="px-[10rem] font-nunito">
      <p className="text-[6rem] font-bold text-color-secondary-2 mb-[3.2rem]">
        A Large Catalogue of Partnerships
      </p>
      <div>
        {catalogueData.map((catalogue: Catalogue, index: number) => (
          <div key={index} className="flex justify-between mb-[3rem]">
            <div className="w-[45%] text-color-secondary-2 ">
              <p className="text-[4rem] font-bold">{catalogue.title}</p>
              <p>{catalogue.text1}</p>
              <p className="mt-[1.5rem] mb-[3.2rem]">{catalogue.text2}</p>
              <p className="text-[rgba(196,196,196,1)]">Partner with us</p>
            </div>
            <div className="bg-color-tertiary w-[40rem] h-[30rem] rounded-[.8rem]"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CatalogueOfPartners;
