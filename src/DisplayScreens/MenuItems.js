import React from 'react';
import Music from './Music';
import Games from './Games';
import Setting from './Setting';
import Coverflow from './Coverflow';
class MenuItems extends React.Component{
 
  render(){
    const styles={
        MenuItems:{
        // width:150,
        // height:280,
        display:'grid',
        gridColumnTemplates:'auto',
        backgroundSize:'cover',
        backgroundColor:'white',
        padding:"0px 10px",
      }
    }
    return (
      
        <div className="MenuItems" style={styles.MenuItems}>
            <Coverflow/>
            <Music/>
            <Games/>
            <Setting/>
        </div>

    );
  }
}

export default MenuItems;
