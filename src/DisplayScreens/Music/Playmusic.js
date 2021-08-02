import React from 'react';
class PlayMusic extends React.Component{
 
  render(){
    console.log(this.props.Songs[this.props.songIndex].url)
    return (
      
        <div className="PlayMusic" id="PlayMusic">
          <div className="MusicName">{this.props.Songs[this.props.songIndex].name}</div>
          <img src='https://images.unsplash.com/photo-1495582575459-2eac77721458?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'/>
           <audio id='audio' controls={true}>
                <source src={this.props.Songs[this.props.songIndex].url} type="audio/mpeg"/>
              </audio>

        </div>

    );
  }
}

export default PlayMusic;
