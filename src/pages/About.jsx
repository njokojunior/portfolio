import styles from "./About.module.css";

import Tag from "../components/Tag";
import ProfileContact from "../components/contact/ProfileContact";

function About() {
  return (
    <section>
      <h2 className="headingPrimary">About Me</h2>
      <p className="subTitle">Professional profile and summary</p>

      <div className={styles.aboutContainer}>
        <div className="border-section profile-description ">
          <div className="inner-section">
            <h3 className="headingPrimary">Professional Summary</h3>
            <h4 className="subTitle">
              My Software development philosophy and approach
            </h4>

            <p>
              Experienced DevOps Engineer and Software Developer with 5+ years
              of experience specializing in cloud infrastructure, CI/CD
              pipelines, and automation. Passionate about implementing
              Infrastructure as Code and creating scalable, resilient systems
              that enable development teams to deliver high-quality software
              efficiently.
            </p>

            <p>
              My approach to DevOps centers around the principles of automation,
              collaboration, and continuous improvement. I believe in breaking
              down silos between development and operations to create a unified
              workflow that enhances productivity and reliability.
            </p>

            <p>
              Currently seeking opportunities to leverage my expertise in AWS,
              Kubernetes, and Terraform to help organizations implement modern
              cloud-native architectures and streamline their development
              processes.
            </p>

            <div className={`tags ${styles.aboutTags}`}>
              <Tag>React JS</Tag>

              <Tag>Node JS</Tag>

              <Tag>Next JS</Tag>

              <Tag>Nest JS</Tag>

              <Tag>MongoDB</Tag>

              <Tag>SQL</Tag>

              <Tag>Devops</Tag>

              <Tag color="#f03e3e" bgColor="#ffc9c9">
                Kubernetes
              </Tag>

              <Tag>Cloud architecture</Tag>

              <Tag>Infrastructure as code</Tag>
            </div>
          </div>
        </div>

        <div className="border-section">
          <div className="inner-section personalDetails">
            <h2 className="headingPrimary heading-details">Personal Details</h2>
            <div className={styles.personalDetailsIcons}>
              <ProfileContact />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
