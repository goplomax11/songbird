import birdsData from './birds-data.js';
import React from 'react';

export default class ServiceWorker extends React.Component {


    getNames = (round = 0) =>{
        const res = [];
     birdsData[round].map(({name}) =>res.push(name))
     return res;
    }

    getRandomQuestion = (round = 0) =>{
      const rand =  Math.floor(Math.random()*6);
      const {audio} = birdsData[round][rand];
      return {
          audio,
          rand
      }
    }

    getDescriptions = (round, id) =>{

        const {name, species, description,audio, image} = birdsData[round][id];
        return {
            name,
            species,
            audio,
            description,
            image

        }
    }


}