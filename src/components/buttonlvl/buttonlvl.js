import React from 'react';
import './buttonlvl.css'

 export default class ButtonLvl extends React.Component {

    state = {
        count: 0,
        closed: true
    }

    render(){

    
    return (
        
            <button className='btn' disabled>Next Level</button>
      
    )
    }
 }