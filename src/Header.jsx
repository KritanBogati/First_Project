import React, { useState } from 'react'
import img from './logo.png'
import { Link } from 'react-router-dom';

export const Header = () => {


    return (    
        <div className='Mainhead'>
            <div className='imghead'>
                <img src={img} />
            </div>
            <div className='navhead'>
                <ul>
                    <li>
                        <Link to="/">
                        <button>Home</button>
                        </Link>
                        
                    </li>
                    <li>
                        <Link to="/Formpage">
                        <button>Form</button>
                        </Link>
                        
                    </li>
                    <li>
                        <Link to="/Aboutuspage">
                        <button>About US</button>
                        </Link>
                        
                    </li>
                    <li>
                        <Link to="/Contactuspage">
                        <button>Contact US</button>
                        </Link>
                        
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header;