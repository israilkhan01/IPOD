import React from 'react';

class Games extends React.Component{
 
  render(){
    const styles={
        Games:{
        width:'100%',
        height:'100%',
        backgroundImage:"url('https://images.unsplash.com/photo-1552820728-8b83bb6b773f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80')",
        backgroundSize:"cover",
        zIndex:1,
      }
    }
    return (
      
        <div  className="Games" style={styles.Games}>
         <h1>Games</h1>
        </div>

    );
  }
}

export default Games;
