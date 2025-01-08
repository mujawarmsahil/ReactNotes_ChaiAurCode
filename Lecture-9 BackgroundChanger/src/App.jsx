import {useState} from "react"
function App() {
  const [color,setColor] = useState("black");

  return (
    <>
      <div className="window  h-screen" style={{backgroundColor:color}}>
        <div className="fixed flex flex-wrap justify-center top-12 inset-x-0 px-2 text-slate-100">
          <div className="bar  bg-slate-600 flex flex-wrap justify-center gap-3 px-4 py-3 rounded-md shadow-md shadow-orange-200">
            <button className="outline-none px-4 rounded-md " onClick={()=>setColor("red")} style={{backgroundColor:"Red"}}>Red</button>
            <button className="outline-none px-4 rounded-md " onClick={()=>setColor("Green")} style={{backgroundColor:"Green"}}>Green</button>
            <button className="outline-none px-4 rounded-md " onClick={()=>setColor("Blue")} style={{backgroundColor:"Blue"}}>Blue</button>
            <button className="outline-none px-4 rounded-md " onClick={()=>setColor("Black")} style={{backgroundColor:"Black"}}>Black</button>
            <button className="outline-none px-4 rounded-md " onClick={()=>setColor("olive")} style={{backgroundColor:"olive"}}>olive</button>
            <button className="outline-none px-4 rounded-md " onClick={()=>setColor("#e3e3e3")} style={{backgroundColor:"grey"}}>grey</button>
            <button className="outline-none px-4 rounded-md " onClick={()=>setColor("Lime")} style={{backgroundColor:"Lime"}}>Lime</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
