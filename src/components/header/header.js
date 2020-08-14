import React from 'react';
import './header.css'

const Header = () =>{
    return(
        <div className='header flex-column'>
            <div className='top-panel d-flex'>
                    <img src='https://cdn6.f-cdn.com/contestentries/366530/8685907/56e6889ed1845_thumb900.jpg' className='icon'/>
                    <h5>
                        Score: 
                        <span className="score">
                            0
                        </span>
                    </h5>
                </div>
                    <ul className='birds d-flex'>
                        <li className="active">
                            <a href='#' >Разминка</a>
                        </li>
                        <li>
                            <a href='#'>Воробьиные</a>
                        </li>
                        <li>
                            <a href='#'>Лесные птицы</a>
                        </li>
                        <li>
                            <a href='#'>Певчие птицы</a>
                        </li>
                        <li>
                            <a href='#'>Хищные птицы</a>
                        </li>
                        <li>
                            <a href='#'>Морские птицы</a>
                        </li>
                    </ul>
                
        </div>
    )
}

export default Header;