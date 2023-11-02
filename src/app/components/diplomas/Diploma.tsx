import { Diplomas } from "@/app/contexts/data";
import Image from "next/image";
import Link from "next/link";

function Diploma ({name, date, organism, logoOrganism, linkOrganism} : Diplomas){
    return (
        <div className="flex flex-col gap-4 bg-blue-500 rounded-xl p-4 min-h-[20vh]">
            <Image src={logoOrganism} alt={`Logo de l'organisme : ${organism}`} width={100} height={100} className="rounded-xl self-center"/>
            <p>{date}</p>
            <h3 className="text-2xl underline">{name}</h3>
            <p className="text-xl">{organism}</p>
            <Link href={linkOrganism} target="blank" className="self-center">
                <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 7H16C18.7614 7 21 9.23858 21 12C21 14.7614 18.7614 17 16 17H14M10 7H8C5.23858 7 3 9.23858 3 12C3 14.7614 5.23858 17 8 17H10M8 12H16" stroke="#fff" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </Link>
        </div>
    )
}

export default Diploma;

