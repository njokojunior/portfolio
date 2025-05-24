import styles from "./SectionNavBar.module.css";
import SkillOption from "./SkillOption";

function SectionNavBar({ options, activeSkill, setActiveSkill }) {
  function handleActiveSkill(skillID) {
    setActiveSkill(skillID);
  }

  return (
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
  );
}

export default SectionNavBar;
