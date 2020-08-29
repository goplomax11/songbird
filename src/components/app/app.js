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
  start:false,
  clicked:[false,false,false,false,false,false],
  correct:[false,false,false,false,false,false],
  startScore:5,
  score:0,

}

componentDidMount =() =>{
   this.setQuestion(() =>console.log(`rand:${this.state.rand}`))
   this.changeStart()
   
}


setScoreForRound = (numberOfTry) =>{
  this.setState({
    score: this.state.score + this.state.startScore - numberOfTry
  })
}


changeStart = () =>{
  this.setState({
    start:true
  })
}


setQuestion =() => {
  const {round} = this.state;
  const newRound = this.state.start ? round + 1 : round
  const {audio,rand} = this.serviceWorker
    .getRandomQuestion(newRound)
    this.setState((state) =>{
      return{
        audio,
        rand,
    }})

    
}



changeWait = (index) =>{
  this.setState({
    waiting:false,
    idOnClick: index
  })
  
}

nextRound =() =>{
  this.setState((state) => {
    return {
      round: state.round + 1,
      idOnClick: '',
      waiting:true
  }})

  this.setQuestion();
}


 render() {
   const {audio, rand,idOnClick,waiting,round,score} = this.state
  return (
    <div>
        <Header
        score={score}
        round={round}/>
        <Question audio = {audio}/>

        <div className='row mb2'>
          <div className="col-md-6">
            <AnswerChoice 
            round={round}
            changeWait ={(index) =>this.changeWait(index)}
            rand={rand}
            setScoreForRound={this.setScoreForRound} />
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
        nextRound ={() =>this.nextRound()}
        />
    </div>
  )
}

}



