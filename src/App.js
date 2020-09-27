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
    this.temp_okselected=[false ,false ,false , false];
    this.temp_selected = 0;
    this.state={
      options: ['Games', 'Music', 'Settings', 'CoverFlow'],
      menu_Hide_show:false,
      change_in_angle: 0,
      selected: 0,
      okselected:[false ,false ,false , false],
      showPage: -1,
      general_menu: ['Games', 'Music', 'Settings', 'Cover Flow'],
      songs_sub_menu: ['All Songs', 'Artists', 'Albums'],
      current_music_selection: 0,
      song_index: -1,
      currently_on_play_music_screen: false,
    }
  }


  componentDidMount() {
    var zt = new ZingTouch.Region(document.getElementsByClassName('buttons')[0]);
    zt.bind(document.getElementsByClassName('buttons')[0], 'rotate', (event) => {
      if (this.state.menu_Hide_show)//this rotating facility will only be available when the side bar is shown to the user.
      {
        let dist = event.detail.distanceFromLast;
        this.temp_change_in_angle += dist;
        if (this.temp_change_in_angle > 60) {
          console.log("angle:",this.temp_change_in_angle,this.temp_selected)
          this.temp_selected++;
          this.temp_selected = this.temp_selected % this.state.options.length;
          this.setState({
          selected: this.temp_selected,
            // song_index: -1
          });

          this.temp_change_in_angle = 0;
        }
        else if (this.temp_change_in_angle < -60) {
          console.log("angle:",this.temp_change_in_angle,this.temp_selected)
          this.temp_selected--;
          if (this.temp_selected === -1)
            this.temp_selected = this.state.options.length - 1;

          this.temp_selected = this.temp_selected % this.state.options.length;
          this.setState({
            selected: this.temp_selected,
            // song_index: -1
          });
          this.temp_change_in_angle = 0;
        }
      }

    });
  }

  leftbutton=()=>{
       if(this.state.options.length===3){
         
        this.setState(
          {
              options: this.state.general_menu,
              selected: 0,
              showPage: -1,
              song_index: -1,//we dont want to play any song
          }
      );
      this.temp_selected = 0;
      return;
       }
  }
  okButton=()=>{
    var Menu= document.getElementById('Menu');
   var Option=document.getElementsByClassName('selected');
   if (this.state.selected === 1 && this.state.options.length === 4)
        {
          this.temp_okselected=[false ,false ,false];
            this.setState(
                {
                    options: this.state.songs_sub_menu,
                    okselected:[false ,false ,false],
                    selected: 0,
                    showPage: -1,
                    song_index: -1,//we dont want to play any song
                }
            );
            this.temp_selected = 0;
            return;
      }
    
   if(!this.state.okselected[this.state.selected]&&this.state.menu_Hide_show){
    this.temp_okselected[this.state.selected]=true;
    Menu.style.transform='translateX(-180px)';
    this.setState({
      okselected: this.temp_okselected,
      menu_Hide_show:false
      // selected:0,
    });
    
   }else if(!this.state.menu_Hide_show){
    this.temp_okselected[this.state.selected]=false;
    Menu.style.transform='translateX(0px)';
    this.setState({
      okselected: this.temp_okselected,
      menu_Hide_show:true
      // selected:0,
    });
   }

  }
  menubutton = ()=>{
   var top= document.getElementById('top');
   var Menu= document.getElementById('Menu');
        // 
  if(Menu.clientWidth==170 && Menu.style.transform=='translateX(0px)' && this.state.menu_Hide_show ){
    console.log('hide');
    this.setState({
      menu_Hide_show:false
    })
    Menu.style.transform='translateX(-180px)';
  }else{
    console.log('show')
    this.setState({
      menu_Hide_show:true
    })
    Menu.style.transform='translateX(0px)';
  }

    
  }
  render() {
    const styles = {
      pod: {
        width: 300,
        height: 550,
        position: 'absolute',
        backgroundColor: "#0e192a",
        // backgroundImage: "url('https://images.unsplash.com/photo-1551478279-713be6cb027d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80')",
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
        showMenu={this.state.menu_Hide_show}
        menuOptions={this.state.options}
        musicMenu={this.state.songs_sub_menu}
        selected={this.state.selected}
        okselected={this.state.okselected}
        />
        <Buttons
        menubutton={this.menubutton}
        leftbutton={this.leftbutton}
        okButton={this.okButton}
        />

      </div>
    );
  }
}

export default App;
