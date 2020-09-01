import React from 'react';
import './answer-choice.css';
import ServiceWorker from '../../any/service-worker';


class AnswerChoice extends React.Component {

    
    serviceWorker = new ServiceWorker();
    state ={
        correct:[false,false,false,false,false,false],
        index: ''
    }
    updateBirds (round) {
      return this.serviceWorker.getNames(round)                    
    }

    onClickChoose =(index) =>{
        if(!this.props.clicked[index]){
            this.props.changeWait(index);
            this.setScoreForRound(index)
            this.setState({
                index
            })
        }
        this.props.changeWait(index)
    }  


    setScoreForRound = (idOnClick) =>{

        const {rand,increaseTry} = this.props
        
        
          if ( idOnClick === rand) {
            
          return  this.props.setScoreForRound()
        }
        
        increaseTry();
      }

    render() { 
       
        const {round,rand} = this.props;
        
        const birds = this.updateBirds(round)
        


        const variants = birds.map((bird,index) =>{

            const {clicked} = this.props;
            

            const coloring = index === rand; 

            const isNeedClick = clicked[index]
    
            const clazz = isNeedClick? (coloring?' li-btn right':'li-btn wrong' ) :'li-btn'
        
    

            return (
            <li className='list-group-item' key={index} onClick={() =>this.onClickChoose(index)}>
                  
                <span className={clazz}>                                         
                </span>
                {bird}
           </li>
            )
            })
    return (
        <div className='bird-details'>
            <ul className="item-list list-group d-flex">
                {variants}
            </ul>
        </div>
    )
     }
}

export default AnswerChoice;
