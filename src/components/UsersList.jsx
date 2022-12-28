import "./UsersList.css"
import gift from "../assets/gift.svg"
import edit from "../assets/edit.svg"
import trash from "../assets/trash.svg"
import { useState } from "react"
import EditUser from "./EditUser"
import DeleteUser from "./DeleteUser"

const UsersList = ({users, getAllUsers}) => {
    const [editUser, setEditUser] = useState(false)
    const [delUser, setDelUser] = useState(false)
    const [idUser, setIdUser] = useState()
    const [nameDelUser, setNameDelUser] = useState()

    const updateUser = (id) => {
        setEditUser(!editUser)
        setIdUser(id)
    }

    const deleteUser = (id, fullName) => {
        setDelUser(!delUser)
        setIdUser(id)
        setNameDelUser(fullName)
    }

    return (
        <div className="users-list">
            {
                users?.map(user => (
                    <div className="user" key={user.id}>
                        <h3>{`${user.first_name} ${user.last_name}`}</h3>
                        <hr />
                        <p><span className="term">CORREO</span>{user.email}</p>
                        <p><span className="term">CUMPLEAÑOS</span>
                            <span className="date">
                                <img src={gift}/> {user.birthday}
                            </span>
                        </p>
                        <hr />
                        <div className="btns">
                            <button className="delete" onClick={() => deleteUser(user.id, user.first_name+" " + user.last_name)}><img src={trash}/></button>
                            <button className="update" onClick={() => updateUser(user.id)}><img src={edit}/></button>
                        </div>
                    </div>
                ))
            }
            {
                editUser&&<EditUser userForm={editUser} setUserForm={setEditUser} idUser={idUser} getAllUsers={getAllUsers}/>      
            }
            {
                delUser&&<DeleteUser idUser={idUser} delUser={delUser} setDelUser={setDelUser} getAllUsers={getAllUsers} nameDelUser={nameDelUser}/>
            }
        </div>
    )
}

export default UsersList