/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import type { Metadata } from 'next';
import { Nunito, DM_Sans } from 'next/font/google';
import './globals.css';
import { NextFontWithVariable } from 'next/dist/compiled/@next/font';
import Header from '@/components/home/Header';

export const metadata: Metadata = {
  title: 'Brackium',
  description: 'The best hedge fund for managing your financial assets',
};

const nunito: NextFontWithVariable = Nunito({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-nunito',
});

const dmSans: NextFontWithVariable = DM_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-nunito',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${nunito.variable} ${dmSans.variable}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
