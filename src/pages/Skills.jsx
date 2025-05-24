import { useState } from "react";
import styles from "./Skills.module.css";
import Frameworks from "../components/ui/Frameworks";
import Cloud from "../components/ui/Cloud";
import Databases from "../components/ui/Databases";
import Tools from "../components/ui/Tools";
import Other from "../components/Other";
import Programming from "../components/ui/Programming";
import SkillOption from "../components/SkillOption";
import SectionNavBar from "../components/SectionNavBar";

function Skills() {
  
  const [activeSkill, setActiveSkill] = useState(1);
  

  const options = [
    { sname: "programming", id: 1 },
    { sname: "Cloud & DevOps", id: 2 },
    { sname: "FrameWorks", id: 3 },
    { sname: "Databases", id: 4 },
    { sname: "Tools", id: 5 },
    { sname: "Other", id: 6 },
  ];

  

  return (
    <section>
      <h2 className="headingPrimary">Technical Skills</h2>
      <p className="subTitle">
        Comprehensive overview of my technical expertise
      </p>

      <div>
        <SectionNavBar options={options} activeSkill={activeSkill} setActiveSkill={setActiveSkill} />

        <div className={`border-section ${styles.skillDescription}`}>
          <div className="inner-section">
            {(activeSkill === 1 || activeSkill === 0) && <Programming />}
            {activeSkill === 2 && <Cloud />}
            {activeSkill === 3 && <Frameworks />}
            {activeSkill === 4 && <Databases />}
            {activeSkill === 5 && <Tools />}
            {activeSkill === 6 && <Other />}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
