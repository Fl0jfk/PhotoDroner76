'use client'

import Link from 'next/link';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useData } from '../../contexts/data';

function Navbar({menuOpened, onLinkClick} :NavbarProps ){
    const data = useData();
    const [clickOnLink, setClickOnLink] = useState(menuOpened);
    const menuOpen = (clickOnLink ? "" : "hidden");
    const bgMenuOpen = (clickOnLink ? "black" : ""  );
    const handleLinkClick = () => {
        setClickOnLink(false);
        onLinkClick({ clickOnLink: false });
    };
    useEffect(() => {
        setClickOnLink(menuOpened)
        if(menuOpened){
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }
    }, [menuOpened])
    return (
        <>
            <AnimatePresence>
                {menuOpened && <motion.nav 
                    style={{background: `${bgMenuOpen}`, opacity:0.9}} 
                    className={`md:${menuOpen} sm:${menuOpen} gap-10 text-4xl flex flex-col top-0 left-0 fixed justify-center items-center top-0 left-0 w-full h-[100vh] z-[9] xl:hidden lg:hidden`}
                    initial={{translateX: "100%"}}
                    animate={{translateX: "0%", transition:{duration: 0.5, ease: "easeInOut"}}}
                    exit={{translateX:"100%", transition:{duration: 0.5, ease: "easeInOut"}}}
                    >
                    <div className='w-2/12 h-[100px] md:h-[50px] sm:h-[50px] flex items-center justify-center pt-4 w-full'>
                        {data.profile.enterpriselogo && 
                        <Link className='hover:scale-110 flex items-center justify-center' href={"/"} onClick={handleLinkClick} aria-label="Link to top">
                            <Image src={data.profile.enterpriselogo} alt='Logo de PhotoDroner76' width={150} height={100} className='cursor-pointer z-[8]'/>
                        </Link>
                        }
                    </div>
                    <Link className='hover:scale-110' href="#about" onClick={handleLinkClick} aria-label="Link to section About">About</Link>
                    <Link className='hover:scale-110' href="#skills" onClick={handleLinkClick} aria-label="Link to section Skills">Skills</Link>
                    <Link className='hover:scale-110' href="#portfolio" onClick={handleLinkClick} aria-label="Link to section Portfolio">Portfolio</Link>
                    <Link className='hover:scale-110' href="#contact" onClick={handleLinkClick} aria-label="Link to section Contact">Contact</Link>
                </motion.nav>
                }
            </AnimatePresence>
            <nav style={{background: `${bgMenuOpen}`}} className={`flex gap-6 text-2xl xl:mr-8 lg:mr-8 sm:hidden md:hidden z-[9]`}>
                <Link className='hover:scale-110' href="#about" aria-label="Link to section About">About</Link>
                <Link className='hover:scale-110' href="#skills" aria-label="Link to section Skills">Skills</Link>
                <Link className='hover:scale-110' href="#portfolio" aria-label="Link to section Portfolio">Portfolio</Link>
                <Link className='hover:scale-110' href="#contact" aria-label="Link to section Contact">Contact</Link>
            </nav>
        </>
    )
}

type NavbarProps = {
    menuOpened: boolean;
    onLinkClick: any;
}

export default Navbar;