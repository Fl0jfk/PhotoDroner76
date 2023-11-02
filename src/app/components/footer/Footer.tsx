import Link from "next/link";
import Contact from "../contact/ContactComponent";

function Footer (){
    return (
        <footer className="hidden sm:flex z-1 text-4xl text-white absolute bottom-0 justify-center min-h-[10vh] h-full opacity-90 items-center w-full sm:bg-[#000000]">
            <Link href="instagram.com" target="blank">
                Instagram
            </Link>
        </footer>
    )
}

export default Footer;