import { SkillInfo } from "../User";
import SkillCard from "./SkillCard";

const Skills=()=>{
    const totalSkills = SkillInfo.reduce((count: number, group: any) => count + group.skills.length, 0);
    return <section className="terminal-shell my-10 font-mono" id="Skills">
            <div className="terminal-inner">
            <div className="section-head">
                <div className="section-title-wrap">
                    <h1 className="section-title"><span className="section-kicker">03.&nbsp;</span>Skills</h1>
                    <p className="section-subcopy">A grouped stack across frontend, backend, languages, and daily developer tools with a strong TypeScript and JavaScript core.</p>
                </div>
                <div className="section-meta">{totalSkills} Tools Indexed</div>
            </div>
            <div className="mb-8 flex justify-start">
                <div className="terminal-tag">ls /toolchain --grouped</div>
            </div>
            <div className="skills-grid">
            {
                SkillInfo.map((skill:any, index:number)=><SkillCard key={index} title={skill.title} skills={skill.skills} />)
            }
            </div>
            </div>
        </section>
}
export default Skills;
