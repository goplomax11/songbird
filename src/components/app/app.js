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
  rand: 0,
  audio:'',
  round: 0,
  start:false,
  clicked:[false,false,false,false,false,false],
  correct:[false,false,false,false,false,false],
  startScore:5,
  score:0,
  correctAnswer:false
}

componentDidMount =() =>{
   this.setQuestion()
   this.changeStart()
   
}

changeButtonList = (index) =>{
  const newArr = [
    ...this.state.clicked.slice(0,index),
    true,
    ...this.state.clicked.slice(index+1)
  ]
  this.setState({
    clicked: newArr
  })
  console.log(newArr)
}


setScoreForRound = (numberOfTry) =>{
  this.setState({
    score: this.state.score + this.state.startScore - numberOfTry,
    correctAnswer:true

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
    console.log(`rand:${rand}`)
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
  this.changeButtonList(index);
  
  
}

nextRound =() =>{
  this.setState((state) => {
    return {
      round: state.round + 1,
      idOnClick: '',
      waiting:true,
      correctAnswer:false,
      clicked:[false,false,false,false,false,false]

  }})

  this.setQuestion();
}


 render() {
   const {audio, rand,idOnClick,waiting,round,score,correctAnswer,clicked} = this.state
  return (
    <div>
        <Header
        score={score}
        round={round}/>
        <Question 
        correctAnswer={correctAnswer}
        rand={rand}
        audio = {audio}
        round={round}/>
        <div className='row mb2'>
          <div className="col-md-6">
            <AnswerChoice 
            round={round}
            changeWait ={(index) =>this.changeWait(index)}
            rand={rand}
            setScoreForRound={this.setScoreForRound}
            clicked={clicked} />
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



