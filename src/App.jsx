import { useEffect, useState } from 'react'
import './App.css'
import UsersList from './components/UsersList'
import UsersForm from './components/UsersForm'
import axios from 'axios'

function App() {
  const [users, setUsers] = useState()
  const [newUser, setNewUser] = useState(false)

  const getAllUsers = () => {
    const URL = "https://users-crud.academlo.tech/users/"
    axios.get(URL)
      .then(({data}) => setUsers(data))
      .catch(error => console.log(error))
  }

  useEffect(() => {
      getAllUsers()
    })
  return (
    <div className="App">
      <header>
        <h1>Usuarios</h1>
        <button onClick={() => setNewUser(!newUser)}>+ Crear usuario</button>
      </header>
      <div className="body">
        <UsersList users = {users} getAllUsers={getAllUsers}/>
        {
          newUser&&<UsersForm userForm={newUser} setUserForm={setNewUser} typeForm="Crear" getAllUsers={getAllUsers}/>
        }
      </div> 
    </div>
  )
}

export default App
