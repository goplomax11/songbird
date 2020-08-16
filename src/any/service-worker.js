import birdsData from './birds-data.js';
import React from 'react';

export default class ServiceWorker extends React.Component {


    getNames = (round) =>{
        const res = [];
     birdsData[round].map(({name}) =>res.push(name))
     return res;
    }

    getRandomQuestion = (round) =>{
      const rand =  Math.floor(Math.random()*6);
      const {audio} = birdsData[round][rand];
      return {
          audio,
          rand
      }
    }

    getDescriptions = (round, id) =>{

        const {name, species, description,audio, image} = birdsData[round][id-1];
        return {
            name,
            species,
            audio,
            description,
            image

        }
    }


}