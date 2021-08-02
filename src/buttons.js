import React from 'react';

class Buttons extends React.Component{
 
  render(){
    const styles={
        buttons:{
        width:300,
        height:220,
        position:'absolute',
        // backgroundColor:"#6a7f86",
        display:'inline-block',
        bottom:10,
        left:10,
        textAlign:'center',
        borderRadius:'10px'
      },
      oc:{
        width:200,
        height:200,
        position:'absolute',
        top:'50%',
        left:'50%',
        transform:'translate(-50%,-50%)',
        borderRadius:'50%',
        background:'#efefef',
        textAlign:'center'
      },
      ic:{
        width:100,
        height:100,
        position:'absolute',
        top:'50%',
        left:'50%',
        transform:'translate(-50%,-50%)',
        borderRadius:'50%',
        background:'lightgrey',
      },
      top:{
           width:30,
           height:30,
           position:'absolute',
           top:10,
           left:'50%',
           transform:'translateX(-50%)',
           backgroundSize:'cover',
           border:'none',
           backgroundColor:'none',
           backgroundImage :"url('https://www.flaticon.com/svg/static/icons/svg/2099/2099153.svg')"
      },
      left:{
        width:30,
        height:30,
        position:'absolute',
        top:'50%',
        transform:'translateY(-50%)',
        backgroundSize:'cover',
        left:10,
        border:'none',
        backgroundColor:'none',
        backgroundImage :"url('https://www.flaticon.com/svg/static/icons/svg/60/60769.svg')"
      },
      right:{
        width:30,
        height:30,
        position:'absolute',
        top:'50%',
        transform:'translateY(-50%)',
        backgroundSize:'cover',
        border:'none',
        backgroundColor:'none',
        right:10 ,
        backgroundImage  : "url('https://www.flaticon.com/svg/static/icons/svg/60/60678.svg')"
      },
      bottom:{
        width:30,
        height:30,
        backgroundSize:'cover',
        left:'50%',
        transform:'translateX(-50%)',
        border:'none',
        backgroundColor:'none',
        position:'absolute',
        bottom:10,
        backgroundImage :"url('https://www.flaticon.com/svg/static/icons/svg/64/64595.svg')"
      },
      select:{
        position:'absolute',
        top:'50%',
        left:'50%',
        transform:'translate(-50%,-50%)',
        margin:0
      }
    }
    return (
      
        <div className="buttons" style={styles.buttons}>
            <div className="outer-circle" style={styles.oc}>
                <button onClick={this.props.menubutton} id="top" className='top' style={styles.top}></button>
                <button className="bottom" style={styles.bottom}></button>
                <button onClick={this.props.leftbutton} className="left" style={styles.left}></button>
                <button onClick={this.props.rightbutton} className="right" style={styles.right}></button>
                <div onClick={this.props.okButton} className="outer-circle" style={styles.ic}>
                <h2 onClick={this.props.okButton} style={styles.select}>Select</h2>
                </div>
            </div>
            
        </div>

    );
  }
}

export default Buttons;
