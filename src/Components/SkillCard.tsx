const SkillBadge=(skills:[])=>{
    return skills.map((skill:any, index:number)=><div key={index} className="flex gap-2 border border-primaryColor/20 bg-[#101b16] rounded-2xl items-center py-2 px-3 bs-mx:py-0 bs-mx:px-1.5 bs-mx:gap-1 mb-1">
         <img className="w-[48px] bs-mx:w-[36px] xsm-mx:w-[28px] !p-1" alt={skill} src={`${process.env.PUBLIC_URL}/Icons//${skill}.png`} />
         <div className="text-textColor text-xl font-medium sm-mx:text-lg xs-mx:text-sm ">{skill}</div>
    </div>)
}

const SkillCard =(props:any)=>{
    return <div data-aos="fade-up"   data-aos-duration="800" data-aos-easing="ease-in-sine" className="skill-card shadow-[0_0_18px_0_#64FFDA20] rounded-[28px] mb-3 border border-primaryColor/35 bg-[#0d1914]/80 p-5 bs-mx:p-3">
        <div className="mb-2 text-xs uppercase tracking-[0.28em] text-primaryColor">module</div>
        <div className="text-3xl mb-4 text-white text-center sm-mx:text-2xl xs-mx:text-xal font-bold" style={{fontFamily:"'Space Grotesk', sans-serif"}}>{props.title}</div>
        <div className="flex gap-3 bs-mx:gap-2 justify-center flex-wrap">
            {SkillBadge(props.skills)}
        </div>
    </div>
}
export default SkillCard;
