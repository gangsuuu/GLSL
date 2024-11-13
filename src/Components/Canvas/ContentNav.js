import CanvasItem from "./CanvasItem";

export default function ContentNav({showHeader}) {

  
  return (
    <div className="ContentNav__container SideFrame">
      <div className="settings">
        <ul>
          <li className="setting_icon">
            <div 
              className="setting_List"
              onClick={ () => showHeader()}
            ></div>
          </li>
          <li className="setting_icon">
            <div className="setting_About"></div>
          </li>
          <li className="setting_icon">
            <div className="setting_"></div>
          </li>
        </ul>
      </div>
      <div className="ContentNav__Lists">
        <CanvasItem></CanvasItem>
        <CanvasItem></CanvasItem>
        <CanvasItem></CanvasItem>
        <CanvasItem></CanvasItem>
        <CanvasItem></CanvasItem>
        <CanvasItem></CanvasItem>
      </div>
    </div>
  )

}