import React from 'react';
import './app.css';
import Header from '../header';
import Question from '../question';
import AnswerChoice from '../answer-choice';
import Description from '../description';
import ButtonLvl from '../buttonlvl';
import ServiceWorker from '../../any/service-worker';



export default class App extends React.Component {
  

serviceWorker = new ServiceWorker();


state ={
  idOnClick: '',
  waiting: true,
  rand: '',
  audio:'',
  round: 0,
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



changeWait = (index) =>{
  this.setState({
    waiting:false,
    idOnClick: index

  })
}

nextRound =() =>{
  this.setState({round: this.state.round + 1}); 
 
}


 render() {
   const {audio, rand,idOnClick,waiting,round} = this.state
  return (
    <div>
        <Header
        round={round}/>
        <Question audio = {audio} rand={rand}/>

        <div className='row mb2'>
          <div className="col-md-6">
            <AnswerChoice 
            round={round}
            changeWait ={(index) =>this.changeWait(index)} />
          </div>
          <div className="col-md-6">
          <Description 
          round={round}
          idOnClick={idOnClick}
          waiting={waiting}
           />
          </div>
        </div>
        <ButtonLvl
        nextRound ={this.nextRound}
        />
    </div>
  )
}

}



