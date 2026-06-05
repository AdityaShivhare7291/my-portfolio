import { SkillInfo } from "../User";
import SkillCard from "./SkillCard";

const Skills=()=>{
    return <section className="terminal-shell my-10 font-mono" id="Skills">
            <div className="terminal-inner">
            <h1 className="section-title"><span className="section-kicker">03.&nbsp;</span>Skills</h1>
            <div className="mb-8 flex justify-center">
                <div className="terminal-tag">ls /toolchain --grouped</div>
            </div>
            <div className="flex flex-wrap justify-around md-mx:justify-between sm-mx:justify-center gap-4 md-mx:gap-2">
            {
                SkillInfo.map((skill:any, index:number)=><SkillCard key={index} title={skill.title} skills={skill.skills} />)
            }
            </div>
            </div>
        </section>
}
export default Skills;
