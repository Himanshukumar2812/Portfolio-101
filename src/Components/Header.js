import { Close, MenuOutlined } from '@material-ui/icons'

import React, { useState } from 'react'

import { Link } from 'react-router-dom'

import './Styles/Header1.scss'

const Header = () => {

    const [active,setActive] = useState(false);

    const showMenu = () => {

            setActive(!active)

    }

    return (

        <div className='header'>

                    <div className="header__logo">

                        <h1>Portfolio</h1>

                    </div>

            <nav className={active ? 'navbar active' : 'navbar'}>

                <ul>

                    <div className="closed">

                        <Close className='close' onClick={showMenu}/>

                    </div>

                    <li>

                        <Link to='/'><b>Home</b></Link>

                    </li>

                    <li>

                        <Link to='/'><b>About</b></Link>

                    </li>

                    <li>

                        <Link to='/'><b>Project</b></Link>

                    </li>

                    <li>

                        <Link to='/'><b>Skills</b></Link>

                    </li>

                    <li>

                        <Link to='/'><b>Experience</b></Link>

                    </li>

                    <li>

                        <Link to='/contact'><b>Contact</b></Link>

                    </li>

                </ul>

            </nav>

                    <div className="changer">

                        <MenuOutlined className='menu' onClick={showMenu}/>

                    </div>

                    </div>

    )

}

export default Header