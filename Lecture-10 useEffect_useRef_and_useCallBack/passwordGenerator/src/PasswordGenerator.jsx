import {useState,useCallback,useEffect,useRef} from "react"
function PasswordGenerator(){
    const [password,setPassword] = useState("");
    const [length,setLength] = useState(8);
    const [numberAllowed,setNumberAllowed] = useState(false);
    const [characterAllowed,setCharacterAllowed] = useState(false);
    const passwordRef = useRef(null);
    const passwordSetter = useCallback(()=>{
        let pass = ""
        let allowedString = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
        if(numberAllowed) allowedString += "0123456789"
        if(characterAllowed) allowedString += "!@#$%^&*()_+~`"

        for(let i = 1 ; i <= length ; i++)
        {
            let charIndex = Math.floor(Math.random()*allowedString.length+1)
            pass += allowedString.charAt(charIndex)
        }
        setPassword(pass)
    },[length,numberAllowed,characterAllowed,setPassword])

    useEffect(()=>{
        passwordSetter()
    },[length,numberAllowed,characterAllowed,passwordSetter])


    let copyPassword = useCallback(()=>{
        passwordRef.current?.select()
        // passwordRef.current?.setSelectionRange(0,20)
        window.navigator.clipboard.writeText(password)
    },[password,passwordRef])
    return (
        <>
        <div className="flex flex-col gap-5 rounded-xl bg-slate-600 text-fuchsia-600 px-3 py-4">
            <h2 className="text-pink-100 font-black text-5xl mx-auto">Password Generator</h2>
            <div>
                <input 
                    type="text" 
                    name="password" 
                    id="password" 
                    value={password} 
                    ref={passwordRef}
                    placeholder="e.g. BsSW$4d3S" 
                    className="w-2/4 p-3 rounded-s outline-none text-teal-800"
                    readOnly/>
                <button 
                    className="bg-green-300 p-3 rounded-e text-zinc-800 font-bold" 
                    onClick={copyPassword}
                    >Copy
                </button>
            </div>
            <div className="flex flex-wrap gap-5 justify-center">
                <div className="flex gap-3">
                    <input
                        type="range" 
                        name="length" 
                        id="length" 
                        value = {length}
                        onChange={(e)=>setLength(e.target.value)}
                        min={6} 
                        max={100} 
                        step={1} 
                        className="outline-none accent-slate-400 text-black"/>

                    <label 
                        className="text-black"
                        htmlFor="length">Length : {length}</label>
                </div>

                <div className="flex gap-3">
                    <input
                        type="checkbox" 
                        name="number" 
                        id="number" 
                        className= " accent-slate-400"
                        defaultChecked={numberAllowed}
                        onClick={()=>setNumberAllowed((prev)=>!prev)}/>
                    <label 
                        className="text-black"
                        htmlFor="number">
                            Numbers
                    </label>
                </div>
                <div className="flex gap-3">
                    <input
                        type="checkbox" 
                        name="specialCharacters" 
                        id="specialCharacters" 
                        defaultChecked={characterAllowed}
                        className="accent-slate-400"
                        onClick={()=>setCharacterAllowed((prev)=>!prev)}/>
                    <label 
                        htmlFor="specialCharacters"
                        className="text-black">Special Characters</label>

                </div>
            </div>
        </div>
        </>
    )
}
export default PasswordGenerator