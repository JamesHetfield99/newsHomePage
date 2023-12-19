import { useState } from "react"

import "./header.css"
import logo from "../../images/logo.svg"
import menuIcon from "../../images/icon-menu.svg"
import Navbar from "../Navbar/Navbar"
import BurgerMenuOverlay from "../BurgerMenuOverlay/BurgerMenuOverlay"

const mobileScreen = window.innerWidth < 600
const Header = () => {
  const [showBurgerMenu,setShowBurgerMenu]= useState(false)


  return (
    <header className="main-header">
        <img src={logo} className="logo" alt="company-logo" />
        {mobileScreen
            ?   
              <>
                <img src={menuIcon} className="menu-icon" alt="menu-icon" onClick={() => setShowBurgerMenu(true)} />
                {showBurgerMenu && <BurgerMenuOverlay setShowBurgerMenu={setShowBurgerMenu} />}
              </>
            :
                <Navbar />
        }
    </header>
  )
}

export default Header
