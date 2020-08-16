import React from 'react';
import './description.css';
import DescriptionBird from '../description-bird';

 class Description extends React.Component{


    render() {
        const {waiting,name,species,description,audioTry,image} =this.props;

        const content = waiting ? <Def/> : <DescriptionBird
                                            name={name}
                                            species={species}
                                            description={description}
                                            audioTry ={audioTry}
                                            image={image} />
    
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

