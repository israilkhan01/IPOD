import React from 'react';
import ZingTouch from 'zingtouch';
import $, { event } from 'jquery';

import './App.css';
import PhoneDisplay from './Display';
import Buttons from './buttons';
class App extends React.Component {
  constructor(){
    super();
    this.temp_change_in_angle = 0;
    this.temp_selected = 0;
    this.state={
      options: ['Games', 'Music', 'Settings', 'CoverFlow'],
            change_in_angle: 0,
            selected: 0,
            showPage: -1,
            general_menu: ['Games', 'Music', 'Settings', 'Cover Flow'],
            songs_sub_menu: ['All Songs', 'Artists', 'Albums'],
            current_music_selection: 0,
            song_index: -1,
            currently_on_play_music_screen: false,
    }
  }


  // componentDidMount() {
  //   var zt = new ZingTouch.Region(document.getElementsByClassName('buttons')[0]);
  //   zt.bind(document.getElementsByClassName('buttons')[0], 'rotate', (event) => {
  //     if (document.getElementsByClassName('screen-menu')[0].classList.contains('width-50'))//this rotating facility will only be available when the side bar is shown to the user.
  //     {
  //       let dist = event.detail.distanceFromLast;
  //       this.temp_change_in_angle += dist;
  //       if (this.temp_change_in_angle > 60) {
  //         this.temp_selected++;
  //         this.temp_selected = this.temp_selected % this.state.options.length;
  //         this.setState({
  //           selected: this.temp_selected,
  //           // song_index: -1
  //         });

  //         this.temp_change_in_angle = 0;
  //       }
  //       else if (this.temp_change_in_angle < -60) {
  //         this.temp_selected--;
  //         if (this.temp_selected === -1)
  //           this.temp_selected = this.state.options.length - 1;

  //         this.temp_selected = this.temp_selected % this.state.options.length;
  //         this.setState({
  //           selected: this.temp_selected,
  //           // song_index: -1
  //         });
  //         this.temp_change_in_angle = 0;
  //       }
  //     }

  //   });
  // }
  menubutton = ()=>{
   var top= document.getElementById('top');
   var Menu= document.getElementById('Menu');
        // 
  if(Menu.clientWidth==150 && Menu.style.display=='block' ){
    console.log('hide')
    Menu.style.display='none'
  }else{
    console.log('show')
    Menu.style.display='block'
  }

    
  }
  render() {
    const styles = {
      pod: {
        width: 300,
        height: 550,
        position: 'absolute',
        backgroundColor: "#6a7f86",
        backgroundImage: "url('https://images.unsplash.com/photo-1551478279-713be6cb027d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80')",
        backgroundSize: 'cover',
        boxShadow: ' 0px 0px 10px 1px white',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%,-50%)',
        borderRadius: 20,
        padding: 12,
      }
    }
    return (
      <div className="App" style={styles.pod}>
        <PhoneDisplay
        />
        <Buttons
        menubutton={this.menubutton}
        />

      </div>
    );
  }
}

export default App;
