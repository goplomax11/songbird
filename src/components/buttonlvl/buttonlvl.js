import React from 'react';
import './buttonlvl.css'

 export default class ButtonLvl extends React.Component {

     render(){

    const {nextRound} = this.props
    return (
        
            <button className='btn' onClick ={nextRound}>Next Level</button>
      
    )
    }
 }