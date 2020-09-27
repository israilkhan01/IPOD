import React from 'react';

class Coverflow extends React.Component{
 
  render(){
    const styles={
        Coverflow:{
          width:'100%',
          height:'100%',
          backgroundImage:"url('https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80')",
          backgroundSize:"auto",
          zIndex:1,
      }
    }
    return (
      
        <div className="Coverflow" style={styles.Coverflow}>
          <h1>CoverFlow</h1>
        </div>

    );
  }
}

export default Coverflow;
