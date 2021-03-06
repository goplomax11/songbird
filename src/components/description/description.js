import React from 'react';
import './description.css';
import DescriptionBird from '../description-bird';


 class Description extends React.Component{



    render() {
      
        const {waiting,round,idOnClick} = this.props;



        const content = waiting ?
         <Def/> : <DescriptionBird
                    round={round}
                    idOnClick={idOnClick} />
    
        return (
        
            <div className='card'>
                {content}
            </div>
        
        )
    }
}

export default Description;

const Def = () =>{
    return (
      <div> 
        <p className='instruction'>
            <p>Послушайте плеер.</p>
            <span>Выберите птицу из списка</span>
        </p>
    </div> 
    )
}

