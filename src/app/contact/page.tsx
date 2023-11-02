"use client"

import { DataProvider } from '@/app/contexts/data';
import { Provider } from 'react-redux';
import { store } from '@/app/redux/store';
import { AnimatePresence } from 'framer-motion';
import BackgroundImage from '@/app/components/backgroundproject/BackgroundProject';
import Header from '@/app/components/header/Header';
import ContactComponent from '@/app/components/contact/ContactComponent';

import Head from 'next/head';

export default function Contact() {
  return (
    <>
      <Head>
          <title>Page d`&apos;`accueil du site PhotoDroner76</title>
      </Head>
      <DataProvider>
        <Provider store={store}>
          <main className={`relative h-full min-h-[100vh] min-w-[100vw] w-full select-none xl:overflow-hidden lg:overflow-hidden md:overflow-hidden text-white antialiased bg-black`}>
            <AnimatePresence>
              <BackgroundImage/>
              <Header/>
              <ContactComponent/>
            </AnimatePresence>
          </main>
        </Provider>
      </DataProvider>
    </>
  );
}