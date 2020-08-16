import React from 'react';
import './app.css';
import Header from '../header';
import Question from '../question';
import AnswerChoice from '../answer-choice';
import Description from '../description';
import ButtonLvl from '../buttonlvl';
import ServiceWorker from '../../any/service-worker';



export default class App extends React.Component {





 render() {
  return (
    <div>
        <Header/>
        <Question/>

        <div className='row mb2'>
          <div className="col-md-6">
            <AnswerChoice />
          </div>
          <div className="col-md-6">
          <Description />
          </div>
        </div>
        <ButtonLvl />
    </div>
  )
}

}


