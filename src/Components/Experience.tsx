import { Timeline, useMatches } from "@mantine/core";
import { IconBriefcaseFilled } from "@tabler/icons-react";
import { ExperienceInfo } from "../User";

const TimelineItem = (items: any) => {
    const size=useMatches({
        xs:15,
        md:20,
    })
    return items.map((item: any, index: number) => <Timeline.Item data-aos="fade-up" data-aos-duration="800"
        key={index} className="!pt-12 !mb-2 sm-mx:!p-1" bullet={<IconBriefcaseFilled className="!text-bgColor" size={size} />} >
        <div className="border shadow-[0_0_18px_0_#64FFDA22] hover:-translate-y-2 transition transform duration-300 ease-in-out flex flex-col gap-4 border-primaryColor/40 bg-[#0d1914]/80 p-5 rounded-[24px] sm-mx:p-3">
            <div className="terminal-tag w-fit">cat experience.log</div>
            <div className="flex gap-2 items-center">
                <img className="rounded-lg w-16 md-mx:w-14" src={`${process.env.PUBLIC_URL}/${item.company}.png`} alt="Company" />
                <div className="flex flex-col">
                    <div className="text-white text-2xl font-semibold sm-mx:text-xl xs-mx:text-lg xsm-mx:text-base" style={{fontFamily:"'Space Grotesk', sans-serif"}}>{item.role}</div>
                    <div className="text-lg font-semibold text-textColor md-mx:text-base sm-mx:text-sm xs-mx:text-xs">{item.company} &#x2022; {item.date}</div>
                </div>
            </div>
            <ul className="terminal-copy experience-points md-mx:text-sm xs-mx:text-xs">
                {item.desc.map((point: string, pointIndex: number) => (
                    <li key={pointIndex}>{point}</li>
                ))}
            </ul>

            <div className="text-lg font-medium text-textColor md-mx:text-base sm-mx:text-sm xs-mx:text-xs flex gap-1"><div className="font-semibold text-white">Skills:</div>
                <div className="flex gap-1 flex-wrap">
                    {
                        item.skills.map((skill: any, index: number) => <div key={index}> &#x2022; {skill} </div>)
                    }
                </div>
            </div>
        </div>
    </Timeline.Item>)
}

const Experience = () => {
    const size=useMatches({
        xs:15,
        md:20,
    })
    const dot=useMatches({
        xs:25,
        md:30,
    })
    return <section className="terminal-shell font-mono" id="Experience">
        <div className="terminal-inner">
        <div className="section-head">
            <div className="section-title-wrap">
                <h1 className="section-title"><span className="section-kicker">02.&nbsp;</span>Experience</h1>
                <p className="section-subcopy">Production work across backend systems, browser tooling, and full-stack product delivery with ownership over implementation and performance.</p>
            </div>
            <div className="section-meta">3 Roles Logged</div>
        </div>
        <Timeline color="#64FFDA" active={5} bulletSize={dot} lineWidth={2}>
            {
                TimelineItem(ExperienceInfo)
            }
            <Timeline.Item bullet={<IconBriefcaseFilled className="!text-bgColor" size={size} />} ></Timeline.Item>
        </Timeline>
        </div>
    </section>
}
export default Experience;
