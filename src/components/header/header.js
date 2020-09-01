import React from 'react';
import './header.css'





class Header extends React.Component{

    state =['Разминка','Воробьиные','Лесные птицы','Певчие птицы','Хищные птицы','Морские птицы']

    render(){

    const typesBirds = this.state;
    const {round,score} = this.props;

    const onType = typesBirds.map((bird,index) =>{
        const clazz = (round === index) ? 'eachbird active' : 'eachbird'
        return (
            <li className={clazz}>
               <h6>{bird}</h6> 
            </li>
        )
    })
        return(
            <div className='header flex-column'>
                <div className='top-panel d-flex'>
                        <img src='https://cdn6.f-cdn.com/contestentries/366530/8685907/56e6889ed1845_thumb900.jpg' className='icon' alt='default'/>
                        <h5>
                            Score: 
                            <span className="score">
                                {score}
                            </span>
                        </h5>
                    </div>
                        <ul className='birds d-flex'>
                            {onType}
                        </ul>
                    
            </div>
        )
    }
}

export default Header;