"use client"

import { DataProvider } from './contexts/data';
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { AnimatePresence } from "framer-motion";
import Header from "./components/header/Header";
import Footer from './components/footer/Footer';
import BackgroundImage from "./components/backgroundproject/BackgroundProject";
import Slides from "./components/slider/Slides";
import Contact from './components/contact/ContactComponent';
import InfoProject from './components/infoproject/InfoProject';
import Head from 'next/head';

export default function Home() {
  return (
    <>
    <Head>
        <title>Page d`&apos;`accueil du site PhotoDroner76</title>
    </Head>
    <DataProvider>
      <Provider store={store}>
        <main className={`relative h-full min-h-[100vh] min-w-[100vw] sm:min-h-[180vh] w-full select-none xl:overflow-hidden lg:overflow-hidden md:overflow-hidden text-white antialiased bg-black`}>
          <AnimatePresence>
            <BackgroundImage/>
            <Header/>
            <div className='flex absolute left-4 xl:top-[30%] lg:top-[30%] md:top-[30%] w-full sm:flex-col sm:left-0 sm:gap-12 z-2'>
              <InfoProject/>
              <Slides/>
              <div className='xl:hidden lg:hidden md:hidden'>
                <Contact/>
              </div>
            </div>
            <Footer/>
          </AnimatePresence>
        </main>
      </Provider>
    </DataProvider>
    </>
  );
}