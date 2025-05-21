import { Link } from "react-router-dom";

function MenuOption({icon,text,link}) {
    return (
      <li>
        <Link to={link}>
          <ion-icon name={icon}></ion-icon>
          <div>{text}</div>
        </Link>
      </li>
    );
}

export default MenuOption;