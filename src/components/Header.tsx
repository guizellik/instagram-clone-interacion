import React from 'react'
import { FiUser } from "react-icons/fi";
import logo from '../images/logo-instagram.png'
import { useSelector } from 'react-redux'


const Header = () => {

  const name: string = useSelector((state: any) => state.userInfo.name)

  return (
    <div className="header">
      <header>
        <img src={logo} alt="Logo Instagram" />
        <div className="top-info">
          <span>
            <FiUser />
            {name}
          </span>
        </div>
      </header>
    </div>
  )
}

export default Header