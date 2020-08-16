import React from 'react';
import './description.css';
import DescriptionBird from '../description-bird';

 class Description extends React.Component{

    state = {
        waiting: false
    }

    render() {
        const {waiting} =this.state;

        const content = waiting ? <Def/> : <DescriptionBird />
    
        return (
        
            <div className='card'>
                {content}
            </div>
        
        )
    }
}

export default Description;

const Def = () =>{
    return (
    <p className='instruction'>
        <p>Послушайте плеер.</p>
        <span>Выберите птицу из списка</span>
    </p>
    )
}

