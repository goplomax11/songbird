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
  name: '',
  species: '',
  description:'',
  audio:'',
  image:'',
  rand: '',
  audioTry: '',
  waiting: true
}

componentDidMount() {
  this.setQuestion();
  this.descriptionUpdate();
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
   const {audio, rand,name,species,description,audioTry,image,waiting} = this.state
  return (
    <div>
        <Header/>
        <Question audio = {audio} rand={rand}/>

        <div className='row mb2'>
          <div className="col-md-6">
            <AnswerChoice changeWait ={() =>this.setState({
                                            waiting:false
           })} />
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
        <ButtonLvl />
    </div>
  )
}

}



