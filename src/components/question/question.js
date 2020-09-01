import React from 'react';
import './question.css';
import AudioPlayer,{RHAP_UI} from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import birdsData from '../../any/birds-data'



 class Question extends React.Component { 
     onClick = () =>{
        return  this.playerRef.current.audio.onPause()  
     }
    
    render(){
        
        const  playerRef = React.createRef()
        const {audio,correctAnswer,rand,round} = this.props
        const {name,image} = birdsData[round][rand];

                          
        const correctImage = correctAnswer ?
         image : 'https://birds-quiz.netlify.app/static/media/bird.06a46938.jpg'
        const correactName = correctAnswer ?
        name : '*******' 
    return (
        <div className="question jumbotron rounded">

            <img className='bird-img' src={correctImage} alt='bird'  onClick={this.onClick}/>
            <div className='wrapper'>
                <ul className='list-group list-group-flush'>
                    <li className='list-group-item head'>
                        <h3>{correactName}</h3>
                    </li>
                    <li className='list-group-item head audio-player'>
                    
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
                                    RHAP_UI.VOLUME
                                ]
                            }
                                                    
                            ref={playerRef}
                        />
                   
                    </li>
                </ul>
            </div>
           

           
        </div>
    )
 }
}

export default Question;