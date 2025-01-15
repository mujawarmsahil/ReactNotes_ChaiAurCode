import { useParams } from "react-router-dom"

export default function User(){
    const {userid} = useParams()
    return (
        <>
            <div className=" items-center flex justify-center bg-slate-950 text-white text-center h-screen">User : {userid}</div>
        </>
    )
}
