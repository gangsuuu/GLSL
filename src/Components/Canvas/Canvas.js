import { useEffect, useRef } from "react"
import Connect from "../../GLSLs/ConnectCanvas"

export default function Canvas () {
  const canvasWrapRef = useRef()
  useEffect(()=>{
    const canvasWrap = canvasWrapRef.current
    const connect = new Connect(canvasWrap)
    connect.connect()

  },[])



  return (
    <div className="canvasContainer">
        <div
          className="canvasWrap"
          ref={canvasWrapRef}
        >

        </div>
    </div>
  ) 
}