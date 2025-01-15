import { useLoaderData , Link} from "react-router-dom";
//Link tag present in react-router-dom is used as replacement of the anchor tag in react because if we look for a functionality of Anchor tag then it refresh the entire page whenever we click on it So to avoid that we use Link tag 
//NavLink also used for same thing but it have some additional functionalities like as variables isActive isPresent etc we help developer to manipulate the navbar and other component with respect to it

export default function Github(){
    const data = useLoaderData() // basically its a hook in react-router-dom which allows us to the calculated values required to show or to provide logic related to that values when your comes to the component 
    return (
        <>
            <div className="h-screen flex flex-col justify-evenly items-center bg-slate-400">
                <div>
                <img src={data?.avatar_url} className="object-contain" width={"150px"} height={"150px"}/> 
                </div>
                <p className="bg-gray-900 rounded p-5 text-white">Followers on GITHUB : {data?.followers}</p>
                <p className="bg-gray-900 rounded p-5 text-white">Name : {data?.name}</p>
                <p className="bg-gray-900 rounded p-5 text-white">Youtube Channel : <Link to={`${data?.blog}`}>{data?.blog}</Link></p>
                <p className="bg-gray-900 rounded p-5 text-white">About Me : {data?.bio}</p>
            </div>
            {/* {data?.followers}
            {data?.name}
            {data?.blog}
            {data?.bio}
            <img src={data?.avatar_url}/> */}
        </> // The ? operator check if the particular object is present or not.If not then it will not execute the further logic 
    )
}
export const GitHubInfoLoader = async () => {
    const response = await fetch("https://api.github.com/users/hiteshchoudhary") // fetch function returns a promise and then we convert it into javascript object and return it
    return response.json();
}