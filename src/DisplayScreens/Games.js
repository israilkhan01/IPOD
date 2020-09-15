import React from 'react';

class Games extends React.Component{
 
  render(){
    const styles={
        Games:{
        // width:150,
        // height:50,
        display:'flex',
        justifyContent:'space-between',
        padding:'15px 0px',
        fontWeight:300,
        borderBottom:'0.1px solid lightgrey'
      }
    }
    return (
      
        <div  className="Games" style={styles.Games}>
           <h3 >Games</h3>
           <img style={{padding:5}}  width='20' height="16" src="https://www.flaticon.com/svg/static/icons/svg/565/565870.svg"/>

        </div>

    );
  }
}

export default Games;
