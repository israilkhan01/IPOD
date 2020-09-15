import React from 'react';
import MenuItems from './MenuItems';
class Menu extends React.Component{
 
  render(){
    const styles={
        Menu:{
        // marginTop:7,
        width:150,
        height:320,
        backgroundColor:'#def3f6',
        backgroundSize:'cover',
        // borderRadius:'10px',
        display:'none',
      
      }
    }
    return (
      
        <div className="Menu" id="Menu" style={styles.Menu}>
            <h2 style={{padding:20}}>IPOD</h2>
            <MenuItems/>
        </div>

    );
  }
}

export default Menu;
