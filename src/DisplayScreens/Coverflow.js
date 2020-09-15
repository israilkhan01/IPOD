import React from 'react';

class Coverflow extends React.Component{
 
  render(){
    const styles={
        Coverflow:{
        padding:'15px 0px',
        // width:150,
        display:'flex',
        justifyContent:'space-between',
        fontWeight:300,
        borderBottom:'0.1px solid lightgrey'
      }
    }
    return (
      
        <div className="Coverflow" style={styles.Coverflow}>
          <h3>Coverflow</h3>            
          <img style={{padding:5}} width='20' height="16" src="https://www.flaticon.com/svg/static/icons/svg/565/565870.svg"/>
        </div>

    );
  }
}

export default Coverflow;
