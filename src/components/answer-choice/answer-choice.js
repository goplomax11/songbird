import React from 'react';
import './answer-choice.css';
import ServiceWorker from '../../any/service-worker';


class AnswerChoice extends React.Component {

    state = {
        startScore:5,
        numberOfTry:0
    }

    serviceWorker = new ServiceWorker();
   
    updateBirds (round) {
      return this.serviceWorker.getNames(round)                    
    }

    onClickChoose =(index) =>{
        this.props.changeWait(index);
        this.setScoreForRound(index)
    }  


    setScoreForRound = (idOnClick) =>{

        const {rand} = this.props
        const {numberOfTry} = this.state
        
        console.log(`id:${idOnClick}`)
        if ( idOnClick === rand) {
          return  this.props.setScoreForRound(numberOfTry)
        }
        this.setState({
            numberOfTry: this.state.numberOfTry + 1
        })
        
      }

    render() { 
       
        const {round} = this.props;
        const birds = this.updateBirds(round)
    return (
        <div className='bird-details'>
            <ul className="item-list list-group d-flex">
            {birds.map((bird,index) =>(
                 <li className='list-group-item' key={index} onClick={() =>this.onClickChoose(index)}>
                       
                     <span className='li-btn'>                                         
                     </span>
                     {bird}
                </li>
            ))}
                
                
            </ul>
        </div>
    )
     }
}

export default AnswerChoice;
