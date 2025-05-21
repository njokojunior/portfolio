import { useState } from "react";
import styles from "./Skills.module.css";
import Frameworks from "../components/Frameworks";
import Cloud from "../components/Cloud";
import Databases from "../components/Databases";
import Tools from "../components/Tools";
import Other from "../components/Other";
import Programming from "../components/Programming";
import SkillOption from "../components/SkillOption";

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

  function handleActiveSkill(skillID) {
    setActiveSkill(skillID);
  }

  return (
    <section>
      <h2 className="headingPrimary">Technical Skills</h2>
      <p className="subTitle">
        Comprehensive overview of my technical expertise
      </p>

      <div>
        <ul className={styles.options}>
          {options.map((option) => (
            <SkillOption
              key={option.id}
              handleActiveSkill={handleActiveSkill}
              id={option.id}
              activeSkill={activeSkill}
            >
              {option.sname.toUpperCase()}
            </SkillOption>
          ))}
        </ul>

        <div className={`border-section ${styles.skillDescription}`}>
          <div className="inner-section">
            {(activeSkill === 1 || activeSkill === 0) && <Programming />}

            {activeSkill === 2 && <Cloud />}
            {activeSkill === 3 && <Frameworks />}
            {activeSkill === 4 && <Databases />}
            {activeSkill === 5 && <Tools />}
            {activeSkill === 6 && <Other />}
          </div>

          {/* <Programming /> */}
        </div>
      </div>
    </section>
  );
}

export default Skills;
