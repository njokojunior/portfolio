
import styles from './Programming.module.css'

function Programming() {
    return (
      <>
        <h3 className="headingPrimary">Programming Languages</h3>
        <p className="subTitle">
          Languages I work with, categorized by proficiency
        </p>

        <div className={styles.boxContainer}>
          <div className={styles.box}>
            <div>
              <span>JavaScript/TypeScript</span>
              <span>Advanced</span>
            </div>
            <progress value={9} min={0} max={10}></progress>
          </div>

          <div className={styles.box}>
            <div>
              <span>Java</span>
              <span>Intermediate</span>
            </div>
            <progress value={7} min={0} max={10}></progress>
          </div>

          <div className={styles.box}>
            <div>
              <span>Bash/Shell</span>
              <span>Advanced</span>
            </div>
            <progress value={7} min={0} max={10}></progress>
          </div>

          <div className={styles.box}>
            <div>
              <span>C</span>
              <span>Intermediate</span>
            </div>
            <progress value={6} min={0} max={10}></progress>
          </div>

          <div className={styles.box}>
            <div>
              <span>C++</span>
              <span>Intermediate</span>
            </div>
            <progress value={6} min={0} max={10}></progress>
          </div>
        </div>
      </>
    );
}

export default Programming;