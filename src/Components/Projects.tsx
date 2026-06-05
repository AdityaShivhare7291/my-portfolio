import { ProjectInfo } from "../User";
import ProjectCard from "./ProjectCard";

const Projects=()=>{
    return (
        <section className="terminal-shell my-10 font-mono" id="Projects">
            <div className="terminal-inner">
            <h1 className="section-title"><span className="section-kicker">04.&nbsp;</span>Projects</h1>
            <div className="mb-8 flex justify-center">
                <div className="terminal-tag">grep -R "production work" ./projects</div>
            </div>
            <div className="flex flex-wrap justify-around md-mx:justify-between sm-mx:justify-center gap-4 md-mx:gap-2">
                {
                    ProjectInfo.map((project:any, index:number)=><ProjectCard key={index} title={project.title} desc={project.desc} image={project.image} live={project.live} link={project.link} github={project.github} technologies={project.technologies} />)
                }
            </div>
            </div>
        </section>
    )
}
export default Projects;
