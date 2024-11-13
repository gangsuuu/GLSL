export default function Month({month,setPage}) {
  return(
    <div className="contentList__month">
      <div className="contentList__month__btn" onClick={() => setPage(month)}>
        {month}
      </div>
    </div>
  )
}