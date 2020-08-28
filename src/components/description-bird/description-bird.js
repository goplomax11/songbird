import React from 'react';
import ServiceWorker from '../../any/service-worker';
import './description-bird.css';

class DescriptionBird extends React.Component {

    serviceWorker = new ServiceWorker();

    state = {
        idOnClick: ''
    }

    componentDidMount () {
        this.updateClick()
    }

    componentDidUpdate () {}

    updateClick = () =>{
        const {idOnClick} =this.props
        this.setState({
            idOnClick
        })
    }


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
        audioTry:audio,
        
        
    }
}

    render() {
        const {name,species,description,audioTry,image} = this.descriptionUpdate
        
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