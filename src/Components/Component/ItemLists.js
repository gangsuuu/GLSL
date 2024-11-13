import { useEffect, useState } from "react"
import Month from "./Month";
import Connect from "../../GLSLs/ConnectCanvas"
import CanvasInfo from "../../GLSLs/canvasInfo";
const month = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
]

const canvasInfo = new CanvasInfo()
export default function ItemLists() {
  const [page,setPage] = useState('glsl')
  const [info,setInfo] = useState('info')
  
  useEffect(()=>{
  },[page])

  useEffect(() => {
    const item = canvasInfo.getInfo()
    if(item !== undefined){
      setInfo(item)
    }
  },[])

  function checkMonth () {
    let currentPage

    month.map((m) => {
      if(m === page){
        currentPage = 'glsl'
      }
    })
    setPage(currentPage)
  }
  return (
    <div className="contentLists__container">
      <div className="contentLists__top">
        {page === 'glsl' ? <h2>GLSL</h2> : <h2>{page}</h2>}
        {
          page !=='glsl' ? 
            <div className="contentLists__backBtnWrap">
              <div className="contentLists__backBtn" onClick={() => checkMonth()}>button</div>
            </div>
          : ''
        }
      </div>
      <div className="contentLists__content">
        <ul>
          {
            page === 'glsl' ?(
            month.map((item, index) => (
              <Month month={item} key={index} setPage={setPage}></Month>
            )))
            : (month.map((item, index) =>(
                item === page ? <div>{item}</div>
                : ""
            )))
          }
        
        </ul>
      </div>      

    </div>
  )
}
