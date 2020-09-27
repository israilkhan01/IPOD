import React from 'react';

class Artist extends React.Component{
 
  render(){
    const styles={
        Artist:{
          width:'100%',
          height:'100%',
          backgroundImage:"url('https://images.unsplash.com/photo-1508973379184-7517410fb0bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80')",
          backgroundSize:"cover",
          zIndex:1,
   
      }
    }
    return (
      
        <div className="Artist " style={styles.Artist}>

        </div>

    );
  }
}

export default Artist;
