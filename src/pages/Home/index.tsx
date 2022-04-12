import { useState, useEffect } from 'react'
import { Card, CardProps } from "../../components/Card"
import styles from './styles.module.css'

interface IUserGit {
  name: string,
  avatar: string
}

export function Home() {
  const url = "https://api.github.com/users/davivsouza"
  const [usersArray, setUsersArray] = useState<CardProps[]>([])
  const [userName, setUserName] = useState("")
  const [IuserGitHub, setIUserGitHub] = useState<IUserGit>({} as IUserGit)




  const createNewUser = () => {
    const newUser = {
      name: userName,
      time: getCurrentHour()
    }
    addNewUser(newUser)
  }
  
  const addNewUser = (newUser: CardProps) => {
    setUsersArray(prevState => [...prevState, newUser])
  }

  const handleUserName = (name: string) => {
    setUserName(name)
  }

  const getCurrentHour = () => {
    return new Date().toLocaleString().substring(0, 16)
  }


  useEffect(() => {
    async function fetchData() {
      
        const response = await fetch(url)
        const data = await response.json() as IUserGit

        
        const getIUserGithub = {
          name: data.name,
          avatar: data.avatar
        }

        setIUserGitHub(getIUserGithub)
      
    }
    fetchData()

  }, [])

  return (
    <main className={styles.container}>

      <header>
        <h1>Lista de Presença</h1>
        <div className={styles.pfp}>
          <strong>{IuserGitHub.name}</strong>
          <img src={IuserGitHub.avatar} alt={IuserGitHub.name} />
        </div>

      </header>

      

      <input
        type="text"
        placeholder='Digite o nome...'
        onChange={e => handleUserName(e.target.value)}
      />
      <button
        type="submit"
        className={styles.submitBtn}
        onClick={() => createNewUser()}
      >
        Adicionar
      </button>

      {usersArray.map((user, idx: number) => (
        <Card
          key={idx}
          name={user.name}
          time={user.time}
        />
      ))}
    </main>

  )
}

