// import styles from './Tag.module.css'
import "../utils/utils.module.css";

function Tag({children, color, bgColor}) {
    return (
        <div className='tag' style={{color: color, backgroundColor:bgColor}}>{children}</div>
    )
}

export default Tag;