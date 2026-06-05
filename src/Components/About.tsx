
import { Info } from "../User";
import Typewriter from "typewriter-effect";
import { Button, useMatches } from "@mantine/core";
import ResumeViewer from "./ResumeViewer";
import { useDisclosure } from "@mantine/hooks";
import { IconDownload } from "@tabler/icons-react";
import Particles from "./magicui/Particles";
import { NeonGradientCard } from "./magicui/neon-gradient-card";
const About = () => {
    const [opened, { close }] = useDisclosure(false);
    const btn = useMatches({
        xs: 'xs',
        sm: 'sm',
        md: 'md',
        lg: 'lg'
    })
    return (
        <>
            <section data-aos="zoom-out-up" data-aos-duration="800" className="terminal-shell" id="About">
                <Particles
                    className="absolute -z-10 inset-0"
                    quantity={240}
                    ease={80}
                    vx={.1}
                    vy={.1}
                    color="#64FFDA"
                    refresh
                />
                <div className="terminal-inner flex relative overflow-hidden justify-around items-center font-mono px-4 py-4 sm-mx:px-0 xs-mx:py-2 h-fit lg-mx:justify-between bs-mx:flex-wrap bs-mx:flex-col-reverse bs-mx:!overflow-visible bs-mx:gap-8">
                <div className="bs:ml-6 bs:w-3/5 flex flex-col gap-4 bs-mx:items-center bs-mx:text-center">
                    <div className="terminal-tag">root@aditya:~</div>
                    <div className="prompt-line text-primaryColor text-lg lg-mx:text-base xs-mx:text-sm">init portfolio session</div>
                    <div className="text-white text-[4.25rem] font-extrabold leading-none lg-mx:text-5xl sm-mx:text-4xl xs-mx:text-3xl xsm-mx:text-[27px]" style={{fontFamily:"'Space Grotesk', sans-serif"}}>{Info.name}</div>
                    <div className="text-white text-4xl flex flex-wrap font-semibold lg-mx:text-[27px] sm-mx:text-2xl xs-mx:text-xl xsm-mx:text-lg">
                        <span className="mr-2 text-textColor">role:</span>
                        <span className="text-primaryColor"><Typewriter options={{ strings: Info.stack, autoStart: true, loop: true, }} /></span>
                    </div>
                    <div className="glow-line my-2 w-full max-w-xl"></div>
                    <div className="text-textColor text-lg w-[92%] text-justify leading-8 lg-mx:my-0 lg-mx:text-base sm-mx:text-sm xs-mx:text-xs bs-mx:w-full">{Info.bio}</div>
                    <div className="xs-mx:w-full flex gap-3 xs-mx:justify-between">
                        {/* <Button onClick={open} className="focus-visible:!outline-none !text-bgColor !w-fit xs-mx:!w-[46%]" size={btn} variant="filled" color="#64FFDA">Check Resume</Button> */}
                        <Button component="a" href="AdityaShivhareResume.pdf" download={Info.name} className="focus-visible:!outline-none !text-primaryColor !w-fit xs-mx:!w-full !border-primaryColor/60 !bg-[#0d1914] hover:!bg-[#12211b]" size={btn} variant="outline" color="#64FFDA" rightSection={<IconDownload size={20} />}>Download Resume</Button>
                    </div>
                </div>
                <div className="h-fit flex justify-center items-center rounded-full bs:mr-6 w-fit">
                    <NeonGradientCard className="w-[325px] h-[325px] lg-mx:w-64 lg-mx:h-64 xsm-mx:w-56 xsm-mx:h-56 items-center justify-center text-center !rounded-[32px] !border !border-primaryColor/25 !bg-[#0d1914]">
                        <img src={`${process.env.PUBLIC_URL}/profile.jpg`} alt="profile" className="w-full h-full rounded-[28px] object-cover" />
                        {/* <img src={`${process.env.PUBLIC_URL}/Ekart.png`} alt="Ekart" /> */}
                    </NeonGradientCard>
                </div>
                </div>
            </section>
            <ResumeViewer opened={opened} close={close} />
        </>
    )
}
export default About;
