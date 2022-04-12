import styles from "styles.module.css"

export interface ICardProps {
  name: string
  time: string
}
export function Card(props : ICardProps){
  return(
    <div className={styles.card}>
      <strong>{props.name}</strong>
      <small>{props.time}</small>
    </div>
  )
}