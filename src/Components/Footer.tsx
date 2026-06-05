import { Info, socialLinks} from "../User";

const Footer=()=>{
    const socialIcons=socialLinks.map((socialLink, index)=>{
        return <a   key={index} href={`${socialLink.link}`} target="_blank" rel="noreferrer" className="font-mono text-lg  hover:text-primaryColor hover:scale-105 transition transform duration-300 ease-in-out">
        <socialLink.icon stroke={1.5}  size={25} />
    </a>
    })
    return <footer className="terminal-shell mt-6 font-mono">
        <div className="terminal-inner flex flex-col gap-3 items-center text-center">
        <div className="terminal-tag">session complete</div>
        <div className="text-3xl md-mx:text-2xl text-primaryColor font-semibold" style={{fontFamily:"'Space Grotesk', sans-serif"}}>{Info.name}</div>
        <div className="md-mx:flex hidden text-textColor gap-8 sm-mx:gap-6">{socialIcons}</div>
        <div className="text-textColor text-xl md-mx:text-lg sm-mx:text-base xs-mx:text-sm xs-mx:flex flex-col items-center">Copyright &copy; {new Date().getFullYear()} {Info.name} <span className="xs-mx:hidden">|</span> <span>All Rights Reserved</span></div>
        </div>
    </footer>
}
export default Footer;
