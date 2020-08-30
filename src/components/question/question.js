import React from 'react';
import './question.css';
import AudioPlayer from '../audio-player/audio-player'
import birdsData from '../../any/birds-data'


 class Question extends React.Component { 
    render(){
        const {audio,correctAnswer,rand,round} = this.props
        const {name,image} = birdsData[round][rand];
            
        const correctImage = correctAnswer ?
         image : 'https://birds-quiz.netlify.app/static/media/bird.06a46938.jpg'
        const correactName = correctAnswer ?
        name : '*******' 
    return (
        <div className="question jumbotron rounded">

            <img className='bird-img' src={correctImage} alt='bird' />
            <div>
                <ul className='list-group list-group-flush'>
                    <li className='list-group-item'>
                        <h3>{correactName}</h3>
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