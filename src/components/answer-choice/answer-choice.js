import React from 'react';
import './answer-choice.css';
import ServiceWorker from '../../any/service-worker';


class AnswerChoice extends React.Component {

    state = {
        value:''
    }

    serviceWorker = new ServiceWorker();
   
    updateBirds (round) {
      return this.serviceWorker
                  .getNames(round)

         
     }

    onClickChoose =(index) =>{
        this.props.changeWait(index);
       
    }  

    render() { 
       
        const {round} = this.props;
        const birds = this.updateBirds(round)
    return (
        <div className='bird-details'>
            <ul className="item-list list-group d-flex">
            {birds.map((bird,index) =>(
                 <li className='list-group-item' key={index} onClick={() =>this.onClickChoose(index)}>
                     <span className='li-btn'>{bird}</span>
                </li>
            ))}
                
                
            </ul>
        </div>
    )
     }
}

export default AnswerChoice;
