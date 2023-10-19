import { Facebook, Instagram, LinkedIn, Twitter } from '@material-ui/icons'

import React, { useState } from 'react'

import './Styles/Main1.scss'

import dp from './assets/profile-pic.png'

const Main = () => {

    return (

        <div className='main'>

            <div className='main__container'>

                <div className="main__content">

                    <div className="text">

                            <p>Hey There !</p>

                            <h1>I am Himanshu Kumar</h1>

                            <p>A Fresher Software Engineer</p>

                            <div className="icons">

                                <Twitter className='icon'/>

                                <Instagram className='icon'/>

                                <Facebook className='icon'/>

                                <LinkedIn className='icon'/>

                            </div>

                    <div className="buttons">

                        <button>See Me</button>

                        <button>Hire Me</button>

                    </div>

                    </div>

                </div>

                <div className="main__img">

                    <img src={dp} alt="" />

                </div>

            </div>

        </div>

    )

}

export default Main