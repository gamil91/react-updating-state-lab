import React, { Component } from 'react';

export default class YoutubeDebugger extends Component {


    constructor(){
        super()
        this.state = {
            errors: [],
            user: null,
            settings: {
                bitrate: 8,
                video: {
                    resolution: '1080p'
                }
            }
        }
    }

    handleClick = () =>  {
        this.setState(prevState => {
            return {
                settings:{...prevState.settings, bitrate: 12}
            }
        })
    }

    handleRes = () => {
        this.setState(prevState => {
            return {
                settings: {...prevState.settings, video: {resolution: '720p'} }
            }
        })
    }


    render(){
        return (
            <div>
                <button onClick={this.handleClick} className="bitrate"></button>
                <button onClick={this.handleRes} className="resolution"></button>
            </div>  
      )
    }


}


