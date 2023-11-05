"use client"

import { DataProvider } from '@/app/contexts/data';
import { AnimatePresence } from 'framer-motion';
import Header from '@/app/components/header/Header';
import Footer from '../components/footer/Footer';
import ContactComponent from '@/app/components/contact/ContactComponent';
import Head from 'next/head';
import Map from '../components/map/Map';

export default function Contact() {
  return (
    <>
      <Head>
          <title>Page de contact du site PhotoDroner76</title>
      </Head>
      <DataProvider>
          <main className={`relative h-full min-h-[100vh] sm:min-h-[160vh] min-w-[100vw] w-full select-none xl:overflow-hidden lg:overflow-hidden md:overflow-hidden text-white antialiased bg-black`}>
            <AnimatePresence>
              <Header/>
                <h1 className='text-6xl sm:text-5xl w-full text-center sm:pt-[10vh] md:pt-[10vh]'>Contactez-nous</h1>
                <ContactComponent/>
                <Map/>
              <Footer/>
            </AnimatePresence>
          </main>
      </DataProvider>
    </>
  );
}