"use client"

import { DataProvider } from './contexts/data';
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { AnimatePresence } from "framer-motion";
import Header from "./components/header/Header";
import BackgroundImage from "./components/backgroundproject/BackgroundProject";
import Slides from "./components/slider/Slides";
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
        <main className={`relative h-screen select-none overflow-hidden text-white antialiased bg-black`}>
          <AnimatePresence>
            <BackgroundImage/>
            <Header/>
            <div className='flex absolute left-4 bottom-[30%] h-[350px] w-full sm:flex-col sm:left-0 sm:gap-4 sm:bottom-[50%]'>
              <InfoProject/>
              <Slides/> 
            </div>
          </AnimatePresence>
        </main>
      </Provider>
    </DataProvider>
    </>
  );
}