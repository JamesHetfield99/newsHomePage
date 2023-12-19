import "./burgerMenuOverlay.css"

import Navbar from "../Navbar/Navbar"
import closeIcon from "../../images/icon-menu-close.svg"

const BurgerMenuOverlay = ( {setShowBurgerMenu}) => {
  return (
    <div className="menu-overlay">
        <div className="menu-content-container">
            <img src={closeIcon} alt="close" onClick={() => setShowBurgerMenu(false)} />
            <Navbar />
        </div>
    </div>
  )
}

export default BurgerMenuOverlay
