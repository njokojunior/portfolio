import { Link } from 'react-router-dom';
import styles from './Button.module.css'


function Button({type,className,children}) {

    return <Link type={type} className={`${styles.btn} ${styles[className]}`} >{children}</Link>;
}

export default Button;