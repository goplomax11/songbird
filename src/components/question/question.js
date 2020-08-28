import React from 'react';
import './question.css';
import AudioPlayer from '../audio-player/audio-player'


 class Question extends React.Component {
     

    
    
    
    render(){
        const {audio} = this.props
     
    return (
        <div className="question jumbotron rounded">

            <img className='bird-img' src='https://birds-quiz.netlify.app/static/media/bird.06a46938.jpg' alt='bird' />
            <div>
                <ul className='list-group list-group-flush'>
                    <li className='list-group-item'>
                        <h3>*******</h3>
                    </li>
                    <li className='list-group-item'>
                        <AudioPlayer audio={audio} />
                    </li>
                </ul>
            </div>
           

           
        </div>
    )
 }
}

export default Question;