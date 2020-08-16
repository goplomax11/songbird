import React from 'react';
import './question.css';
import ServiceWorker from '../../any/service-worker';


 class Question extends React.Component {
     
    serviceWorker = new ServiceWorker();

    state = {
        audio: '',
        rand: ''
      }

   componentDidMount() {
    this.setQuestion();
   }


    setQuestion () {
     const {audio,rand} = this.serviceWorker
        .getRandomQuestion(0)
        this.setState({
            audio,
            rand
        })
        
    }
    
    
    
    render(){
        const {audio,rand} = this.state
     
    return (
        <div className="question jumbotron rounded">

            <img className='bird-img' src='https://birds-quiz.netlify.app/static/media/bird.06a46938.jpg' alt='bird' />
            <div>
                <ul className='list-group list-group-flush'>
                    <li className='list-group-item'>
                        <h3>*******</h3>
                    </li>
                    <li className='list-group-item'>
                        <audio controls="controls">
                            <source src={audio} type="audio/mpeg" />
                                 Your browser does not support the audio element.
                         </audio>
                    </li>
                </ul>
            </div>
           

           
        </div>
    )
 }
}

export default Question;