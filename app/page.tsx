'use client';
import Image from 'next/image';
import homePerson from '../assets/home-person.jpg';
import WhyYouShouldPartner from '@/components/home/WhyYouShouldPartner';
import CatalogueOfPartners from '@/components/home/CatalogueOfPartners';

export default function Home() {
  return (
    <main className=" py-[10rem] font-nunito text-[1.6rem] bg-color-white">
      <section className="bg-home-bg bg-no-repeat bg-cover  rounded-[1rem] h-[40rem] w-full flex px-[10rem] items-center justify-between">
        <div className="w-[60%]">
          <p className="text-[4rem] font-bold text-color-secondary-2">
            A portfolio of investments, 100% managed by experts
          </p>
          <p className="text-color-secondary-2">
            We’ve made access to the best global investment opportunities easy.
            Rise connects you to US investments that earn returns in dollars.
            Get started with a minimum of $10.
          </p>
        </div>
        <div className="">
          <Image
            src={homePerson}
            alt="home-person"
            priority
            width={350}
            height={550}
            className="rounded-[1rem] "
          />
        </div>
      </section>
      {/* why you should partner section */}
      <WhyYouShouldPartner />
      {/* A catalogue of partners section */}
      <CatalogueOfPartners />
    </main>
  );
}
