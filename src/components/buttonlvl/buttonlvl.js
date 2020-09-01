import React from 'react';
import './buttonlvl.css'

 export default class ButtonLvl extends React.Component {

     render(){

    const {nextRound,closed} = this.props

    const clazz = closed? 'btn': 'btn act'
    return (
        <div >
            <button className={clazz} onClick ={nextRound}>Next Level</button>
        </div>
    )
    }
 }