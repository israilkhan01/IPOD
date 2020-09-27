import React from 'react';
import Game from './DisplayScreens/Games'
import Artist from './DisplayScreens/Music/Artist';
import Albums from './DisplayScreens/Music/Albums';
import Allsongs from './DisplayScreens/Music/Allsongs';
import Coverflow from './DisplayScreens/Coverflow';
import Setting from './DisplayScreens/Setting';
import Menu from './DisplayScreens/Menu'
class PhoneDisplay extends React.Component {

  render() {
    const styles = {
      screen: {
        marginTop: 7,
        // position:'absolute',
        width: 300,
        height: 320,
        backgroundImage: "url('https://images.unsplash.com/photo-1533675180235-0ba57d720b51?ixlib=rb-1.2.1&auto=format&fit=crop&w=620&q=80')",
        display: 'block',
        position: 'relative',
        backgroundSize: 'cover',
        boxShadow: 'inset 0px 0px 10px black',
        // filter:'grayscale(1)',
        borderRadius: '10px',
        zIndex:2,
        overflow: 'hidden'
      },
      Games:{
        top:0,
        position:'absolute',
        width:'100%',
        height:'100%',
        zIndex:-1,
        overflow:'hidden',
      }
    }
    let handler = false;
    if(this.props.menuOptions.length===3){
      handler=true;
    }
    // console.log(this.props.menuOptions)
    return (

      <div className="screen" style={styles.screen}>
        <Menu
          menuOptions={this.props.menuOptions}
          musicMenu={this.props.musicMenu}
          selected={this.props.selected}
          okselected={this.props.okselected}
        />
       <div className="optionBackground" style={styles.Games}>
       {this.props.selected==0&&!handler&&this.props.okselected[0] ?
          <Game /> : ''
        }
        {
         this.props.selected==3&&!handler&&this.props.okselected[3] ?
            <Coverflow /> : ''
        }
        {
          this.props.selected==2&&!handler&&this.props.okselected[2]  ?
            <Setting /> : ''
        }
        {
          this.props.selected==1&&handler&&this.props.okselected[1]?
            <Artist /> : ''
        }
        {
         this.props.selected==2&&handler&&this.props.okselected[2]?
            <Albums /> : ''
        }
         {
         this.props.selected==0&&handler&&this.props.okselected[0]?
            <Allsongs /> : ''
        }
       </div>
      </div>

    );
  }
}

export default PhoneDisplay;
