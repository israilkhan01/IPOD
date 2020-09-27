import React from 'react';

class Albums extends React.Component{
 
  render(){
    const styles={
        Albums:{
          width:'100%',
          height:'100%',
          backgroundImage:"url('https://images.unsplash.com/photo-1587731556938-38755b4803a6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1057&q=80')",
          backgroundSize:"cover",
          zIndex:1,
      }
    }
    return (
      
        <div className="Albums " style={styles.Albums}>
           
        </div>

    );
  }
}

export default Albums;
