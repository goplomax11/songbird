import React from 'react';
import ServiceWorker from '../../any/service-worker';
import './description-bird.css';

class DescriptionBird extends React.Component {

    state ={
        name: '',
        species: '',
        description:'',
        audio:'',
        image:'',
    }



    serviceWorker = new ServiceWorker();

    componentDidMount = () =>{
        this.descriptionUpdate();
    }


    descriptionUpdate() {
      const {name,species,description,audio,image} 
      = this.serviceWorker
             .getDescriptions(0,3)
    
        this.setState({
        name,
        species,
        description,
        audio,
        image
        })
    }


    render() {
        const {name,species,description,audio,image} = this.state;
        
        return (
            <div className = "card bird-description">
                <div className='d-flex'>
                    <img className ='bird-image' src={image} />
                    <ul>
                        <li><h4>{name}</h4></li>
                        <li>{species}</li>
                        <li>
                            <audio controls="controls">
                            <source src={audio} type="audio/mpeg" />
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