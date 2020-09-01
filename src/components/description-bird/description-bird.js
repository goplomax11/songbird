import React from 'react';
import ServiceWorker from '../../any/service-worker';
import './description-bird.css';
import AudioPlayer,{RHAP_UI} from 'react-h5-audio-player';

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
                    <img className ='bird-image' src={image} alt='bird'/>
                    <div className='wrapper'>
                    <ul>
                        <li><h4>{name}</h4></li>
                        <li>{species}</li>
                        <li >
                        <AudioPlayer
                            autoPlayAfterSrcChange={false}
                            src={audio}
                            className='audio-player'
                            layout="horizontal-reverse"
                            showJumpControls={false}
                            customAdditionalControls={[]}
                            customVolumeControls={[]}
                            customProgressBarSection={
                                [
                                    RHAP_UI.CURRENT_TIME,
                                    RHAP_UI.PROGRESS_BAR,
                                    RHAP_UI.DURATION,
                                    
                                ]
                            }
                                                  
                         />
                        </li>
                    </ul>
                    </div>
                </div>
                <span className='bird-desc'>
                    {description}
                </span>
            </div>
        )
    }
}

export default DescriptionBird;