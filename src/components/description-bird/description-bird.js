import React from 'react';

import './description-bird.css';

class DescriptionBird extends React.Component {



    render() {
        const {name,species,description,audioTry,image} = this.props;
        
        return (
            <div className = "card bird-description">
                <div className='d-flex'>
                    <img className ='bird-image' src={image} />
                    <ul>
                        <li><h4>{name}</h4></li>
                        <li>{species}</li>
                        <li>
                            <audio controls="controls">
                            <source src={audioTry} type="audio/mpeg" />
                                 Your browser does not support the audio element.
                         </audio>
                         </li>
                    </ul>
                </div>
            <span className='bird-description'>{description}</span>
                
            </div>
        )
    }
}

export default DescriptionBird;