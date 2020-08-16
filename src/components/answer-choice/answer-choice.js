import React from 'react';
import './answer-choice.css';


class AnswerChoice extends React.Component {



    render() { 
       
        const {changeWait,birds} = this.props;
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
