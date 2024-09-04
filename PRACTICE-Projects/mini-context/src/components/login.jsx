import React, { useState, useContext } from "react";
import userContext from "../context/Usercontext";
 
function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    const { setUser } = useContext(userContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({username, password});
    }

    return (
        <div className="bg-slate-800 w-full h-full my-4 p-20">
            <h2 className="text-white my-4 p-4">Login</h2>
            <input 
                type='text'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder='Username' 
            />
            {" "}
            <input 
                type='text' 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder='Password' 
            />
            <button onClick={handleSubmit} className="text-white my-4 p-4">Submit</button>
        </div>
    );
}
 
export default Login;
