import { useState, useEffect } from 'react'
import { Card } from "../../components/Card"
import styles from './styles.module.css'
import emptyUserIcon from "../../assets/empty-user.png"


export function Home() {
  const [usersArray, setUsersArray] = useState([])
  const [userName, setUserName] = useState("")
  const [loginKey, setLoginKey] = useState(false)

  const initialUser = { name: "user138109890", avatar: emptyUserIcon }
  const url = "https://api.github.com/users/davivsouza"

  const [userGitHub, setUserGitHub] = useState(initialUser)


  const createNewUser = () => {
    const newUser = {
      id: usersArray.length + 1,
      name: userName,
      time: getCurrentHour()
    }
    addNewUser(newUser)
  }
  
  const addNewUser = (newUser) => {
    setUsersArray(prevState => [...prevState, newUser])
  }

  const handleUserName = (name) => {
    setUserName(name)
  }

  const getCurrentHour = () => {
    return new Date().toLocaleString().substring(0, 16)
  }


  useEffect(() => {
    async function fetchData() {
      if (loginKey) {
        const response = await fetch(url)
        const data = await response.json()
        const getUserGithub = {
          name: data.name,
          avatar: data.avatar_url
        }
        setUserGitHub(getUserGithub)
      } else {
        setUserGitHub(initialUser)
      }
    }
    fetchData()

  }, [loginKey])

  return (
    <main className={styles.container}>

      <header>
        <h1>Lista de Presença</h1>
        <div className={styles.pfp}>
          <strong>{userGitHub.name}</strong>
          <img src={userGitHub.avatar} alt={userGitHub.name} />
        </div>

      </header>
      <button
        className={styles.loginBtn}
        onClick={() => !loginKey ? setLoginKey(true) : setLoginKey(false)}
      >
        {!loginKey ? "Login with GitHub" : "Logout"}
      </button>

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

