import React from 'react'
import YouTube from 'react-youtube';


//https://www.youtube.com/watch?v=3N08nnizBPs&list=PLTYWomeGVoxEaJVM3fLiGbgT97OpJuBWg&index=1&t=90s
//https://youtu.be/3N08nnizBPs
//https://www.youtube.com/watch?v=3N08nnizBPs
class Videos extends React.Component {
    videoOnReady(event) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
      }

    render() {
      const opts = {
        height: '390',
        width: '1300',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };
      const {videoId} = this.props
   
      return (<YouTube videoId={videoId} opts={opts} onReady={this.videoOnReady} />)
      
      
    }
    
  }


export default Videos