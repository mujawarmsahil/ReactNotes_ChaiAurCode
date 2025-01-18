import {useContext, useState} from "react"
import UserContext from "../Context/UserContext"

function Login(){
    const {setUser} = useContext(UserContext) // here we are accessing useContext hook to get the values of UserContext in which we are created the context and extracted the setUser method to set the user details
    const [userName,setUserName] = useState("");
    const [password,setPassword] = useState("");
    const styling = {
        display : "flex",
        flexDirection : "column",
        gap : "10px",
        padding : "20px",
        backgroundColor : "#ee3e3",
        borderRadius : "8px",
        color : "Olive"
    }
    function submitUser(e){
        e.preventDefault()
        setUser({userName,password})//Here we are setting the user details
    }
    return(<>
        <div style={styling}>
            <h3>LOGIN FORM</h3>
            <input type="text" name="username" value={userName} id="username" onChange={(e)=>setUserName(e.target.value)} />
            <input type="text" name="password" value={password} id="password" onChange={(e)=>setPassword(e.target.value)} />
            <button type="button" onClick={(e) => submitUser(e)}>Login</button>
        </div>
    </>)
}

export default Login;