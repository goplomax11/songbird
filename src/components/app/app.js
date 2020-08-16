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
  name: '',
  species: '',
  description:'',
  audio:'',
  image:'',
  rand: '',
  audioTry: '',
  waiting: true,
  round: 1,
  birds: []
  }

componentDidMount() {
  this.setQuestion();
  this.descriptionUpdate();
  this.updateBirds(this.state.round);
}



updateBirds (round) {
  const names = this.serviceWorker
     .getNames(round)
     this.setState({
         birds: names
     })
     
 }

setQuestion () {
 const {audio,rand} = this.serviceWorker
    .getRandomQuestion(0)
    this.setState({
        audio,
        rand
    })
    
}


descriptionUpdate() {
const {name,species,description,audio,image} 
= this.serviceWorker
       .getDescriptions(0,1)

  this.setState({
  name,
  species,
  description,
  audioTry:audio,
  image
  })
}

changeWait = () =>{
  this.setState({
    waiting:false
  })
}


 render() {
   const {audio, rand,name,species,description,audioTry,image,waiting,round,birds} = this.state
  return (
    <div>
        <Header/>
        <Question audio = {audio} rand={rand}/>

        <div className='row mb2'>
          <div className="col-md-6">
            <AnswerChoice 
            birds={birds}
            changeWait ={() =>this.setState({waiting:false})} />
          </div>
          <div className="col-md-6">
          <Description 
          name={name}
          species={species}
          description={description}
          audioTry ={audioTry}
          image={image}
          waiting={waiting}
           />
          </div>
        </div>
        <ButtonLvl
        nextRound ={() =>this.setState({round: round + 1})}
        />
    </div>
  )
}

}



