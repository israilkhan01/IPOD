import React from 'react';

class Allsongs extends React.Component{
 
  render(){
    const styles={
        Allsongs:{
        // width:150,
        display:'flex',
        justifyContent:'space-between',
        padding:'15px 0px',
        fontWeight:300,
        borderBottom:'0.1px solid lightgrey'
      }
    }
    return (
      
        <div className="Allsongs " style={styles.Allsongs}>
            <h3 >Allsongs</h3>
            <img style={{padding:5}} width='20' height="16" src="https://www.flaticon.com/svg/static/icons/svg/565/565870.svg"/>
        </div>

    );
  }
}

export default Allsongs;
