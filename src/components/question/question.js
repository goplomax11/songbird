import React from 'react';
import './question.css';

const Question = () => {
    return (
        <div className="question jumbotron rounded">

            <img className='bird-img' src='https://birds-quiz.netlify.app/static/media/bird.06a46938.jpg' alt='bird' />
            <div>
                <ul className='list-group list-group-flush'>
                    <li className='list-group-item'>
                        <h3>*******</h3>
                    </li>
                    <li className='list-group-item'>
                        <audio controls="controls">
                            <source src="https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC501461-190616_08.13h_koekoek_brabantse%20biesbosch%20jantjesplaat_roep_1%20ex_ad%20m_ter%20plaatse%20zingend_gezien_.mp3" type="audio/mpeg" />
                                 Your browser does not support the audio element.
                         </audio>
                    </li>
                </ul>
            </div>
           

           
        </div>
    )
}

export default Question;