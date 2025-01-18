import { useState } from "react";
import UserContext from "./UserContext"; // imported the context we have created and then using further
import PropTypes from 'prop-types'; // for validating props
function UserContextProvider({children}){ // children means any element comes under the UserContextProvider component
    const [user,setUser] = useState(null);//At first we set the user as null
    //Here we will make DB calls or any other operations which are required to calculate the values
    return (<>
         <UserContext.Provider value={{user,setUser}}>{/*  here we are passing values to children of UserContextProvider and any child  present in those also get access to the values  */}
        {children}
        </UserContext.Provider>
    </>)
}

UserContextProvider.propTypes = {
    children : PropTypes.element.isRequired,
}
export default UserContextProvider