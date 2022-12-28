import { useState, useEffect} from "react"
import axios from "axios"
import "./DeleteUser.css"

const DeleteUser = ({idUser, delUser, setDelUser, getAllUsers, nameDelUser}) => {

    useEffect(() => {
        const URL = `https://users-crud.academlo.tech/users/${idUser}/`
        axios.delete(URL)
          .then((data) => getAllUsers())
          .catch(error => console.log(error))
    }, [])
    
    return (
        <div className="delete-container">
            <div className="delete-user">
                <h2>Eliminar Usuario</h2>
                <p>El usuario <b>{nameDelUser}</b> se ha eliminado</p>
                <button onClick={() => setDelUser(!delUser)}>Aceptar</button>
            </div>
        </div>
    )
}

export default DeleteUser