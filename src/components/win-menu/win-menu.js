import React  from 'react';
import './win-menu.css'

export default class WinMenu extends React.Component {
    render() {
        const {score} = this.props
        if (score === 30) {
            return (
                <div className='win-menu'>
            <div>
                <h1>Поздравляем!!!</h1>
            </div>
            <div className='congrats'>
                <div className='zxc'>Вы прошли викторину и набрали {score} из 30 возможных баллов</div>
            </div>
            <div  className='abs-win'>
                
                    <h3>Это просто невероятно!!!</h3>
                    <div>(Даже у меня это никогда не получалось)</div>
                
            </div>
       </div>
            )
        } 
        else {
            return (
                       
       <div className='win-menu'>
       <div>
           <h1>Поздравляем!!!</h1>
       </div>
       <div className='congrats'>
           <h5>Вы прошли викторину и набрали {score} из 30 возможных баллов</h5>
       </div>
       <div className='btn btn-next'  onClick={this.props.reloadGame} >
           
               <h3 >Попробовать ещё раз!</h3>
           
       </div>
   </div>

            )
        }
        

    }
}