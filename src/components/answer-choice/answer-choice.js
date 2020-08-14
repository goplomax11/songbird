import React from 'react';
import './answer-choice.css';

const AnswerChoice = () =>{
    return (
        <div
        >
            <ul className="item-list list-group">
                <li className='list-group-item'>
                    <span className='li-btn'>Ворон</span>
                </li>
                <li className='list-group-item'>
                    <span className='li-btn'>Журавль</span>
                </li>
                <li className='list-group-item'>
                    <span className='li-btn'>Ласточка</span>
                </li>
                <li className='list-group-item'>
                    <span className='li-btn'>Козодой</span>
                </li>
                <li className='list-group-item'>
                    <span className='li-btn'>Кукушка</span>
                </li>
                <li className='list-group-item'>
                    <span className='li-btn'>Синица</span>
                </li>
                
            </ul>
        </div>
    )
}

export default AnswerChoice;