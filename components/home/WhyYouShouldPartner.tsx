import { Whys } from '@/types';
import React from 'react';

const whysData: Whys[] = [
  {
    title: 'Build wealth',
    text: 'Create, access and share awesome, well vetted, investment opportunities in startups building the future, today!',
  },
  {
    title: 'Build wealth',
    text: 'Create, access and share awesome, well vetted, investment opportunities in startups building the future, today!',
  },
  {
    title: 'Build wealth',
    text: 'Create, access and share awesome, well vetted, investment opportunities in startups building the future, today!',
  },
  {
    title: 'Build wealth',
    text: 'Create, access and share awesome, well vetted, investment opportunities in startups building the future, today!',
  },
];

const WhyYouShouldPartner = () => {
  return (
    <section className="my-[12rem] px-[10rem] font-nunito">
      <p className="text-color-secondary-2 text-[6rem] font-bold mb-[3.2rem]">
        Why you should Partner with Brackium
      </p>
      <div className="grid grid-cols-2 gap-[7rem]">
        {whysData.map((item: Whys, i) => (
          <div key={i}>
            <div className="w-[6rem] h-[6rem] rounded-[.8rem] bg-color-tertiary"></div>
            <p className="text-color-secondary-2 text-[4rem] font-bold mt-[1.6rem] mb-[.8rem]">
              {item.title}
            </p>
            <p className="text-color-secondary-2">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyYouShouldPartner;
