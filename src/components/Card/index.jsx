import styles from "./styles.module.css"

export function Card({name,arrivedTime}){
  return(
    <div className={styles.card}>
      <strong>{name}</strong>
      <small>{arrivedTime}</small>
    </div>
  )
}