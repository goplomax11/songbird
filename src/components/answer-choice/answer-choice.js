import React from 'react';
import './answer-choice.css';
import ServiceWorker from '../../any/service-worker';

class AnswerChoice extends React.Component {

    serviceWorker = new ServiceWorker();


      state = {
        birds: []
      }

   componentDidMount() {
    this.updateBirds();
   }


    updateBirds () {
     const names = this.serviceWorker
        .getNames(0)
        this.setState({
            birds: names
        })
        
    }



    render() { 
        const {birds} = this.state;
        const {changeWait} = this.props;
    return (
        <div className='bird-details'>
            <ul className="item-list list-group">
            {birds.map((bird) =>(
                 <li className='list-group-item' onClick={changeWait}>
                     <span className='li-btn'>{bird}</span>
                </li>
            ))}
                
                
            </ul>
        </div>
    )
     }
}

export default AnswerChoice;