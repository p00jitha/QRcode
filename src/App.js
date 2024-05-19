import {useState, useEffect } from 'react';
import './App.css';

function App() {
  const [temp,setTemp] = useState('')
  const [word,setWord] = useState('')
  const [size,setSize] = useState(400)
  const [bgcolor,setBgcolor] = useState("ffffff")
  const [qrcode,setQrcode] = useState("")
  function handleClick(){
    setWord(temp)
  }

  useEffect(()=>{
    setQrcode(`
    http://api.qrserver.com/v1/create-qr-code/?data=${word}!&size=${size}x${size}&bgcolor=${bgcolor}
    `)
  },[word,size,bgcolor])

  return (
    <>
    <div className='App'>
       <h1>QR Code Generator</h1>
       <div className='input-box'>
        <div className='gen'>
          <input type='text' onChange={(e)=> setTemp(e.target.value)} placeholder='Enter text or url' />
          <button className='button' onClick={handleClick}>
             Generate
          </button>
        </div>
        <div className='extra'>
           <h4 >Background Color:</h4>
           <input type='color' style={{marginTop:"20px"}} onChange={(e)=>setBgcolor(e.target.value.substring(1))}/>
           <input type="range" min="200" max="600" value={size} onChange={(e)=>{setSize(e.target.value)}} />
        </div>
       </div>
       <div className='output-box'>
           <img src={qrcode} alt=""/>
           <a href={qrcode} download="QRCode">
            <button type="button" className='download'>
              Download
            </button>
           </a>
       </div>
    </div>
    </>
  );
}

export default App;
