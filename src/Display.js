import React from 'react';

import Menu from './DisplayScreens/Menu'
class PhoneDisplay extends React.Component{
 
  render(){
    const styles={
        screen:{
        marginTop:7,
        width:300,
        height:320,
        backgroundImage:"url('https://images.unsplash.com/photo-1552234458-9a63237d6d93?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80')",
        display:'inline-block',
        backgroundSize:'cover',
        boxShadow:'inset 0px 0px 10px black',
        borderRadius:'10px',
        overflow:'hidden'
      }
    }
    return (
      
        <div className="screen" style={styles.screen}>
            <Menu/>
        </div>

    );
  }
}

export default PhoneDisplay;
