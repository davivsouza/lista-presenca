import styles from './styles.module.css'
import users from "../../server.json"
import { Card } from "../../components/Card"
import { useState } from 'react'

export function Home() {
  const [usersArray, setUsersArray] = useState(users)
  const [userName, setUserName] = useState("")

  const createNewUser = () => {
    addNewUser({ name: userName, time: getCurrentHour() })
  }
  const addNewUser = (user) => {
    setUsersArray([...usersArray, user])
  }

  const handleUserName = (name) => {
    setUserName(name)
  }

  const getCurrentHour = () => {
    return new Date().toLocaleString().substring(11, 16)
  }

  return (
    <main className={styles.container}>
      <h1>Nome: {userName}</h1>
      <input
        type="text"
        placeholder='Digite o nome...'
        onChange={ e => handleUserName(e.target.value) }
      />
      <button 
        type="submit" 
        onClick={ () => createNewUser() }
      >
        Adicionar
      </button>

      {usersArray.map((user, idx) => (
        <Card key={idx} name={user.name} arrivedTime={user.time} />
      ))}
    </main>

  )
}

