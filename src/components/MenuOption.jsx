import { useState } from "react";
import { Link } from "react-router-dom";

function MenuOption({icon,text,link}) {
  const [isActive, setIsActive] = useState(false)

  function handleisActive(){
    setIsActive(true)
  }
    return (
      <li onClick={handleisActive}>
        <Link to={link} className={isActive?"active": ""}>
          <ion-icon name={icon}></ion-icon>
          <div>{text}</div>
        </Link>
      </li>
    );
}

export default MenuOption;