"use client"

import { DataProvider } from '@/app/contexts/data';
import { AnimatePresence } from 'framer-motion';
import Header from '@/app/components/header/Header';
import Footer from '../components/footer/Footer';
import ServicesComponent from '../components/services/ServicesComponent';

import Head from 'next/head';

export default function Services() {
  return (
    <>
      <Head>
          <title>Page de nos services du site PhotoDroner76</title>
      </Head>
      <DataProvider>
          <main className={`relative h-full min-h-[100vh] min-w-[100vw] w-full select-none xl:overflow-hidden lg:overflow-hidden md:overflow-hidden text-white antialiased bg-black`}>
            <AnimatePresence>
              <Header/>
                <ServicesComponent/>
              <Footer/>
            </AnimatePresence>
          </main>
      </DataProvider>
    </>
  );
}