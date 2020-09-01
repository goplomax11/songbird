import React from 'react';
import './app.css';
import Header from '../header';
import Question from '../question';
import birdsData from '../../any/birds-data'
import AnswerChoice from '../answer-choice';
import Description from '../description';
import ButtonLvl from '../buttonlvl';
import ServiceWorker from '../../any/service-worker';
import WinMenu from '../win-menu';



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
  closed:true,
  startScore:5,
  score:0,
  correctAnswer:false,
  win:false,
  numberOfTry:0
}


reloadGame = () =>{



  this.setState((state) => {
    return {
      idOnClick: '',
      waiting: true,
      rand: 0,
      audio:'',
      round: 0,
      start:false,
      clicked:[false,false,false,false,false,false],
      closed:true,
      startScore:5,
      score:0,
      correctAnswer:false,
      win:false,
      numberOfTry:0

  }})

  const random = Math.floor(Math.random()*6);
  const {audio} = birdsData[0][random];
  this.setState({
    audio,
    rand:random
  })
  this.changeStart()

}

componentDidMount =() =>{
   this.setQuestion()
   this.changeStart()
   
}

increaseTry =() =>{
    this.setState({
    numberOfTry: this.state.numberOfTry + 1
})}

changeButtonList = (index) =>{
  const newArr = [
    ...this.state.clicked.slice(0,index),
    true,
    ...this.state.clicked.slice(index+1)
  ]
  this.setState({
    clicked: newArr
  })}


setScoreForRound = (numberOfTry) =>{
  this.setState({
    score: this.state.score + this.state.startScore - this.state.numberOfTry,
    correctAnswer:true,
    closed:false

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
    console.log(`Правильный ответ:${rand+1}`)
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
  if (this.state.closed) {
    return
  }
  this.setState((state) => {
    return {
      round: state.round + 1,
      idOnClick: '',
      waiting:true,
      correctAnswer:false,
      clicked:[false,false,false,false,false,false],
      numberOfTry:0,
      closed:true
  }})
  if(this.state.round >= 5){
    this.setState((state) =>{
      return {
        win:true
      }
    })
  } else {
  this.setQuestion();
  }
}


 render() {
   const {audio, rand,idOnClick,waiting,round,score,correctAnswer,clicked,win,closed} = this.state

   const content = win ? <WinMenu
                         score={score}
                         reloadGame={this.reloadGame}/> :
   <div>
          <Question 
          correctAnswer={correctAnswer}
          rand={rand}
          audio = {audio}
          round={round}/>
          <div className='row mb2'>
            <div className="col-md-6">
              <AnswerChoice 
              increaseTry ={this.increaseTry}
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
          closed={closed}
          />
   </div>
  return (
    <div>
        <Header
        score={score}
        round={round}/>
        {content}
    </div>
  )
}

}



