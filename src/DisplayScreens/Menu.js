import React from 'react';
import MenuItems from './MenuItems';
class Menu extends React.Component{
 
  render(){
    const styles={
        Menu:{
        // marginTop:7,
        width:170,
        height:320,
        backgroundColor:'#f9c58e',
        backgroundSize:'cover',
        borderRadius:'10px',
        transform:'translateX(-180px)',
        transition:'0.7s all',
        borderRadius:'0px 10px 10px 0px',
        zIndex:5,
      }
    }
    return (
      
        <div className="Menu" id="Menu" style={styles.Menu}>
            <h2 style={{padding:20}}>IPOD</h2>
            <MenuItems
            showmusic={this.props.showmusic}
            menuOptions={this.props.menuOptions}
            selected={this.props.selected}
            musicMenu={this.props.musicMenu}
            okselected={this.props.okselected}
            />
        </div>

    );
  }
}

export default Menu;
