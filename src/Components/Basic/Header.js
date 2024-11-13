import gsap from "gsap"
import { useEffect } from "react"

export default function Header({header}) {

  return(
    <header className= {`${header === true ? 'close' : ''}`}>
      <div className="header__container">
        <div className="header__profile__container">
          <div className="header__profile__box">
            <div className="header__profile__photoWrap">
              <img src=''>
              </img>
            </div>
          </div>
        </div>
        <div className="header__profile__contents">
          <div className="header__profile__name">
            <p>Hyuck KIM</p>
            <p>Hyuck_99</p>
          </div>
          <div className="header__profile__info">
            <p>
            This is a study note for GLSL programing code.
That’s a goal that reach to drawwing attractive most item  imagable on the web. This place is where the journey to that place is recorded.
Thank you for watch this.
            </p>
          </div>
          <div className="header__profile__links">
            <ul>
              <li><a href="#">Instagram</a></li>
              <li><a href="#">Facebook</a></li>
              <li><a href="#">Tistory</a></li>
            </ul>
          </div>
        </div>
        <div className="header__profile__emailWrap">
          <div className="header__profile__email">
            <span>E-mail</span><p>happy95virus@gmail.com</p>
          </div>
        </div>
      </div>
    </header>
  )
}