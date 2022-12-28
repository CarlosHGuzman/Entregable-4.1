import axios from "axios"
import { useEffect, useRef, useState } from "react"
import { useForm } from "react-hook-form"
import "./UsersForm.css"

const EditUser = ({userForm, setUserForm, idUser, getAllUsers}) => {
    const {register, handleSubmit, setValue} = useForm()
    const [editUser, setEditUser] = useState()
    const dataForm = useRef()

    const submit = (data) =>{
        const URL = `https://users-crud.academlo.tech/users/${idUser}/`
        console.log("Form: ", data)
        axios.patch(URL, data)
            .then(({info}) => {
                setUserForm(!userForm)
                getAllUsers()})
            .catch(error => console.log(error))
    }

    useEffect(() => {
        const URL = `https://users-crud.academlo.tech/users/${idUser}`
        axios.get(URL)
          .then(({data}) => setEditUser(data))
          .catch(error => console.log(error))
    }, [])

    useEffect(() => {
        if(editUser){
            console.log(dataForm)
            setValue("first_name", editUser.first_name)
            setValue("last_name", editUser.last_name)
            setValue("email", editUser.email)
            setValue("password", editUser.password)
            setValue("birthday", editUser.birthday)
        }
    }, [editUser])

    return(
        <div className="user-form">
            <div className="form-container">
                <div className="exit" onClick={() => setUserForm(!userForm)}></div>
                <h2>Editar Usuario</h2>
                <form ref={dataForm} onSubmit={handleSubmit(submit)}>
                    <label htmlFor="first_name">Name</label>
                    <input type="text" minLength="4" required id="first_name" placeholder="Carlos Humberto" {...register("first_name")}></input>
    
                    <label htmlFor="last_name">surnames</label>
                    <input type="text" minLength="4"mrequired id="last_name" placeholder="Guzman Ramirez" {...register("last_name")}></input>
    
                    <label htmlFor="email">Email</label>
                    <input type="text"minLength="2" required id="email"placeholder="example@gmail.com" {...register("email")}></input>
    
                    <label htmlFor="password">Password</label>
                    <input type="password" minLength="5" required id="password" placeholder="your password" {...register("password")}></input>
    
                    <label htmlFor="birthday">Birthday</label>
                    <input type="date" required id="birthday" {...register("birthday")}></input>
    
                    <button>save changes</button>
                </form> 
            </div>
        </div>
    )
}

export default EditUser