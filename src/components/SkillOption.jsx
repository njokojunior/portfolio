import styles from "./SkillOption.module.css";

function SkillOption({ children, handleActiveSkill, id, activeSkill }) {

    const isActive = id === activeSkill;
  return (
    <li className={`${styles.btn} ${isActive? styles.btnActive: ''}`} onClick={() => handleActiveSkill(id)}>
      {children}
    </li>
  );
}

export default SkillOption;