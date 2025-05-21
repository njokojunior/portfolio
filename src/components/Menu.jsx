import styles from './Menu.module.css'
import MenuOption from "./MenuOption";

function Menu() {

    const menu = [
      {
        icon: "person-outline",
        text: "About Me",
        link: "about",
      },
      {
        icon: "code-slash-outline",
        text: "Skills",
        link: "skills",
      },
      {
        icon: "file-tray-stacked-outline",
        text: "Projects",
        link: "projects",
      },
      {
        icon: "briefcase-outline",
        text: "Experience",
        link: "experience",
      },
      {
        icon: "document-text-outline",
        text: "Architecture",
        link: "architecture",
      },
      {
        icon: "book-outline",
        text: "Code Samples",
        link: "code-samples",
      },
      {
        icon: "trophy-outline",
        text: "Certifications",
        link: "certifications",
      },
      {
        icon: "stats-chart-outline",
        text: "Metrics",
        link: "metrics",
      },
      {
        icon: "logo-github",
        text: "Open Source",
        link: "open-source",
      },
      {
        icon: "chatbox-ellipses-outline",
        text: "Testimonials",
        link: "testimonials",
      },
      {
        icon: "mail-outline",
        text: "Contact",
        link: "contact",
      },
    ];
    return (
        <ul className={styles.menuList}>
            {menu.map(option => <MenuOption key={option.text} link={option.link} icon={option.icon} text={option.text}/>)}
        </ul>
    )
}

export default Menu;