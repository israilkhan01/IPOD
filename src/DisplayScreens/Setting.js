import React from 'react';

class Settings extends React.Component{
 
  render(){
    const styles={
        Settings:{    
          width:'100%',
          height:'100%',
          backgroundImage:"url('https://www.iconfinder.com/data/icons/apple-apps/100/Apple_Settings-512.png')",
          backgroundSize:"contain",
          zIndex:-1,

      }
    }
    return (
      
        <div className="Settings" style={styles.Settings}>
       
        </div>

    );
  }
}

export default Settings;
