import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import MenuIcon from '../../assets/menu.svg'

const Header: FC = () => {
    return (
        <header className='header'>
            <div className='container'>
                <Link to='/'>AniWiki</Link>
                <ul className='header__right'>
                    <li>Login</li>
                    <li>
                        <img src={MenuIcon} alt={'menu'} />
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header
