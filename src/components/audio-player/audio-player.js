import React from 'react';

class AudioPlayer extends React.Component{
    render(){
        const {audio} = this.props

       return (
        <audio src={audio} controls="controls">

        </audio>
        )
    }
}

export default AudioPlayer;