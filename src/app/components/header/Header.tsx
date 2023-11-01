"use client"

import Navbar from '../navbar/Navbar';
import { useState } from 'react';
import Image from 'next/image';
import { useData } from '../../contexts/data';
import CrossButton from '../crossbutton/CrossButton';
import { motion } from 'framer-motion';	
import Link from 'next/link';

function Header(){
    const data = useData();
    const [menuOpened, setMenuOpened] = useState(false);
    const handleClick = () => {
        setMenuOpened(!menuOpened);
    };
    const handleLinkClick = ({ clickOnLink } : handleLinkClickProps) => {
        setMenuOpened(clickOnLink);
    };
    return (
        <motion.header 
            className={`flex p-4 justify-between w-full md:fixed sm:fixed z-[12] max-w-[1440px]`}>
                <div className='w-2/12 sm:w-4/12 flex items-center justify-center'>
                    {data.profile.enterpriselogo && 
                        <Link href="/" className='w-full cursor-pointer z-[8]'>
                            <Image src={data.profile.enterpriselogo} alt='Logo de PhotoDroner76' width={150} height={100} sizes='30vw'/>
                        </Link>
                    }
                </div>
                <div className='w-10/12 flex justify-end items-center sm:mt-[-5px]'>
                    <Navbar menuOpened={menuOpened} onLinkClick={handleLinkClick}/>
                    <div className='flex justify-end w-[40] h-[100px] md:h-[50px] sm:h-[30px] items-center' onClick={() => handleClick()}>
                        <CrossButton menuOpened={menuOpened}/>
                    </div>
                </div>
        </motion.header>
    )
}

type handleLinkClickProps = {
    clickOnLink : boolean;
    onLinkClick: (clickOnLink: boolean) => void;
}

export default Header;