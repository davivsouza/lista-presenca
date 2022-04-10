import styles from './styles.module.css'
import { Card } from "../../components/Card"
import { useState, useEffect } from 'react'

export function Home() {
  const [usersArray, setUsersArray] = useState([])
  const [userName, setUserName] = useState("")

  const createNewUser = () => {
    const newUser = {
      id: usersArray.length + 1,
      name: userName,
      time: getCurrentHour()
    }
    console.log(newUser);
    addNewUser(newUser)
  }
  const addNewUser = (newUser) => {
    setUsersArray(prevState => [...prevState, newUser])
  }

  const handleUserName = (name) => {
    setUserName(name)
  }

  const getCurrentHour = () => {
    return new Date().toLocaleTimeString().substring(0,5)
  }


  useEffect(()=>{

    //corpo do useEffect
    //executado assim que nossa interface é renderizado
  }, [])

  return (
    <main className={styles.container}>

      <header>
        <h1>Lista de Presença</h1>
        <div className={styles.pfp}>
          <strong>Davi</strong>
          <img src="https://github.com/davivsouza.png" alt="Foto de Perfil" />
        </div>
      </header>

      <input
        type="text"
        placeholder='Digite o nome...'
        onChange={e => handleUserName(e.target.value)}
      />
      <button
        type="submit"
        onClick={() => createNewUser()}
      >
        Adicionar
      </button>

      {usersArray.map(user => (
        <Card
          key={user.id}
          name={user.name}
          arrivedTime={user.time}
        />
      ))}
    </main>

  )
}

