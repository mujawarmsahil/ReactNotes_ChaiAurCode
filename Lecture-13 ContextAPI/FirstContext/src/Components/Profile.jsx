import {useContext} from "react"
import UserContext from "../Context/UserContext"

function Profile(){
    const {user} = useContext(UserContext) // as same as Login component here we are taking access of user object 

    if(!user) // as we know when a person visit the website the user is not registered so we give message as follows
        return (<><h2>Please Login First</h2></>)

    //When the object is not null or exists then we show this message
    return(<> 
        <div>
            <h2>welcome {user.userName}</h2>
        </div>
    </>)
}    

export default Profile;
