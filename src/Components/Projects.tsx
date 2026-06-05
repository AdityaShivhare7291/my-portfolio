import { ProjectInfo } from "../User";
import ProjectCard from "./ProjectCard";

const Projects=()=>{
    return (
        <section className="terminal-shell my-10 font-mono" id="Projects">
            <div className="terminal-inner">
            <div className="section-head">
                <div className="section-title-wrap">
                    <h1 className="section-title"><span className="section-kicker">04.&nbsp;</span>Projects</h1>
                    <p className="section-subcopy">Selected builds focused on practical utility, real-time interaction, accessibility, and product-minded engineering decisions.</p>
                </div>
                <div className="section-meta">{ProjectInfo.length} Projects Active</div>
            </div>
            <div className="mb-8 flex justify-start">
                <div className="terminal-tag">grep -R "production work" ./projects</div>
            </div>
            <div className="projects-grid">
                {
                    ProjectInfo.map((project:any, index:number)=><ProjectCard key={index} title={project.title} desc={project.desc} image={project.image} live={project.live} link={project.link} github={project.github} technologies={project.technologies} />)
                }
            </div>
            </div>
        </section>
    )
}
export default Projects;
