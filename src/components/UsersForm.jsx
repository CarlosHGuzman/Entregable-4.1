import axios from "axios"
import { useForm } from "react-hook-form"
import "./UsersForm.css"
const UsersForm = ({userForm, setUserForm, typeForm, getAllUsers}) => {
    const {register, handleSubmit, reset} = useForm()

    const submit = (data) =>{
        const URL = "https://users-crud.academlo.tech/users/"
        console.log(data)
        axios.post(URL, data)
            .then(({data}) => {
                setUserForm(!userForm)
                getAllUsers()})
            .catch(error => console.log(error))
    }
    return(
        <div className="user-form">
            <div className="form-container">
                <div className="exit" onClick={() => setUserForm(!userForm)}></div>
                <h2>{typeForm} Usuario</h2>
                <form onSubmit={handleSubmit(submit)}>
                    <label htmlFor="first_name">Name</label>
                    <input type="text" minLength="4" required id="first_name" placeholder="Carlos Humberto" {...register("first_name")}></input>
    
                    <label htmlFor="last_name">surnames</label>
                    <input type="text" minLength="4" required id="last_name" placeholder="Guzman Ramirez" {...register("last_name")}></input>
    
                    <label htmlFor="email">Email</label>
                    <input type="text" minLength="2" required id="email"placeholder="example@gmail.com" {...register("email")}></input>
    
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

export default UsersForm