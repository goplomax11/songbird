import React from 'react';
import ServiceWorker from '../../any/service-worker';
import './description-bird.css';
import AudioPlayer from '../audio-player/audio-player'

class DescriptionBird extends React.Component {

    serviceWorker = new ServiceWorker();


    descriptionUpdate = () => {
  
        const {round,idOnClick} = this.props
        const {name,species,description,audio,image} 
        = this.serviceWorker
            .getDescriptions(round,idOnClick)

        return {
        name,
        species,
        description,
        image,
        audio
              
    }
}

    render() {
        const {name,species,description,audio,image} = this.descriptionUpdate()
        
        return (
            <div className = "card bird-description">
                <div className='d-flex'>
                    <img className ='bird-image' src={image} />
                    <ul>
                        <li><h4>{name}</h4></li>
                        <li>{species}</li>
                        <li>
                            <AudioPlayer 
                            audio={audio}/>
                        </li>
                    </ul>
                </div>
                <span className='bird-description'>
                    {description}
                </span>
            </div>
        )
    }
}

export default DescriptionBird;