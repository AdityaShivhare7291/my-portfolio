// import { IconHexagonLetterK } from "@tabler/icons-react";
import SideBar from "./SideBar";
import { useEffect, useState } from "react";

const links = ["About", "Experience", "Skills", "Projects", "Contact"];
const navLinks = (col: Boolean, clicked: any) => {
    const handleClick = () => {
        if (clicked) clicked();
    }
    return links.map((link, index) => {
        return <a key={index} onClick={handleClick} className={`${col ? 'flex flex-col items-center rounded-xl border border-transparent px-4 py-3 bg-[#0f1c16] hover:border-primaryColor/40 w-full' : ''} text-textColor text-sm uppercase tracking-[0.24em] font-mono hover:text-primaryColor transition-colors duration-300`} href={`#${link}`}><span className="text-primaryColor">$</span>{link}</a>
    })
}

const IconHexagonLetterPortfolio = () => (
    <div className="flex justify-center items-center">
        <div className="rounded-2xl border border-primaryColor/25 bg-[#09120e]/90 px-4 py-3 shadow-[0_0_28px_rgba(111,255,214,0.08)]">
            <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.32em] text-primaryColor/85">
                <span className="inline-block h-2 w-2 rounded-full bg-[#ff7b72]"></span>
                <span className="inline-block h-2 w-2 rounded-full bg-[#f2cc60]"></span>
                <span className="inline-block h-2 w-2 rounded-full bg-[#8ddb8c]"></span>
                <span className="ml-2">session</span>
            </div>
            <div className="mt-2 flex items-center gap-2 text-white">
                <span className="text-primaryColor">$</span>
                <span className="font-semibold tracking-[0.18em]">portfolio.exe</span>
            </div>
        </div>
    </div>
);




const Header = () => {
    const [show, setShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [shadow, setShadow] = useState(false);
    const controlNavbar = () => {
        if (window.scrollY > lastScrollY && window.scrollY > 70) setShow(false);
        else setShow(true);
        if (window.scrollY > 70) setShadow(true);
        else setShadow(false);
        setLastScrollY(window.scrollY);
    }
    useEffect(() => {
        window.addEventListener('scroll', controlNavbar);
        return () => window.removeEventListener('scroll', controlNavbar);
    })
    return (
        <nav className={`mx-auto flex ${show ? "translate-y-0" : "-translate-y-28"} ${shadow ? "shadow-[0px_10px_30px_-10px_rgba(0,0,0,0.55)]" : ""} transition-transform duration-500 ease-in-out fixed left-0 right-0 top-0 z-10 w-full justify-center px-6 py-4 xs-mx:px-3`}>
            <div className="site-header-shell flex w-full max-w-[1380px] items-center justify-between rounded-[30px] border border-primaryColor/15 bg-[#08110d]/90 px-6 py-4 backdrop-blur-xl xs-mx:px-4">
                <IconHexagonLetterPortfolio />
                <div className="bs:flex gap-6 hidden items-center">
                    {navLinks(false, null)}
                </div>
                <SideBar />
            </div>
        </nav>
    );
}
export default Header;
export { navLinks };
