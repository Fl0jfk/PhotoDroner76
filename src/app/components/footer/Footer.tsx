import Contact from "../contact/Contact";

function Footer (){
    return (
        <footer className="hidden sm:flex z-1 text-4xl text-white absolute bottom-0 justify-center min-h-[10vh] h-full opacity-90 items-center w-full">
            <Contact/>
        </footer>
    )
}

export default Footer;