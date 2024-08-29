import { useRef, useState } from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

function App() {

  const random = gsap.utils.random(-500, 500, 10)
 
  const[first, setFirst] = useState (0)

  const boxref = useRef()

  useGSAP(()=>{
    gsap.to(boxref.current,{
      x:first,
      duration:1
    })
  },[first])

  return (
    <>
      <button onClick={()=>{
        setFirst(random)
      }}>animate</button>
      <div ref={boxref} className="box">
        
      </div>
    </>
  )
}

export default App
