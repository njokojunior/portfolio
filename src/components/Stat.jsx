import styles from './Stat.module.css'

function Stat({num, description,color}) {
    return (
      <div
        className={styles.stat}
        style={{ border: `2px solid #${color}`, color: `#${ color }`}}
      >
        <p className={styles.number}>{num}+</p>
        <p>{description}</p>
      </div>
    );
}

export default Stat;