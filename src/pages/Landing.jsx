import myImage from "./../assets/aude-profile.jpg";
import styles from "./Landing.module.css";
import Button from "../components/ui/Button";
import Stat from "../components/Stat";

const stats = [
  {id: 1, sname: "Years Experience", num: 5, color: 'ae3ec9' },
  {id: 2, sname: "Projects Completed", num: 5, color: '37b24d' },
  {id: 3, sname: "Certifications", num: 3, color: '15aabf' },
  {id: 4, sname: "Students Taught", num: 700, color: '4c6ef5' },
];

function Landing() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <h1 className="heading-primary">Junior Njoko</h1>
          <h2>Software, DevOps & Cloud Engineer</h2>
          <p>
            Building scalable applications, resilient infrastructure and
            automating development workflows to enable teams to deliver
            high-quality software efficiently.
          </p>

          <div className={styles.buttonBox}>
            <Button type="button" className="primary">
              <span>Contact Me</span>
              <ion-icon name="arrow-forward-outline"></ion-icon>
            </Button>

            <Button type="button" className="secondary">
              <ion-icon name="download-outline"></ion-icon>
              <span>Download Resume</span>
            </Button>
          </div>
        </div>

        <div>
          <img
            src={myImage}
            alt="tall guy smilling"
            className={styles.headerProfile}
          />
        </div>
      </header>

      <div className={styles.stats}>
        {stats.map((stat) => (
          <Stat key={stat.id} num={stat.num} description={stat.sname} color={stat.color} />
        ))}
      </div>
    </>
  );
}

export default Landing;
