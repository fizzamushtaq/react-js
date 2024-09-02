import { useState, useCallback, useEffect, useRef } from 'react';
import './App.css';

function App() {
  const [length, setLength] = useState(8);
  const [numberAllow, setNumberAllow] = useState(false);
  const [charAllow, setCharAllow] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let strr = "abqwertyuioplkjhgfdszxcvnmASDFGHJKLPOIUYTREWQZXCVBNM";
    if (numberAllow) strr += "0123456789";
    if (charAllow) strr += " !@#$%^&*{};:/?";

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * strr.length);
      pass += strr.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllow, charAllow]);

  const copyPasswordClipboard = useCallback(() => {
    if (passwordRef.current) {
      passwordRef.current.select();
      passwordRef.current.setSelectionRange(0, 999);
      navigator.clipboard.writeText(passwordRef.current.value);
    }
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllow, charAllow, passwordGenerator]);

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded py-4 my-8 px-4 text-orange-400 text-2xl bg-gray-600'>
        <h1 className='text-2xl text-white text-center my-3'>Password Generator</h1>
        <div className='flex shadow-lg overflow-hidden mb-4'>
          <input
            type="text"
            value={password}
            ref={passwordRef}  // Attach useRef here
            className='outline-none w-full py-1 px-3 rounded-lg text-base'
            placeholder='password'
            readOnly
          />
          <button className='outline-none bg-blue-700 text-white py-0.5 px-3 shrink-0' onClick={copyPasswordClipboard}>
            Copy
          </button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) => setLength(parseInt(e.target.value))}
            />
            <label>Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              checked={numberAllow}
              id="numberInput"
              onChange={() => setNumberAllow((prev) => !prev)}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              checked={charAllow}
              id="characterInput"
              onChange={() => setCharAllow((prev) => !prev)}
            />
            <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
