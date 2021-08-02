import React from 'react';
class MenuItems extends React.Component {
  render() {
    const styles = {
      MenuItems: {
        // width:150,
        // height:280,
        display: 'grid',
        gridColumnTemplates: 'auto',
        backgroundSize: 'cover',
        backgroundColor: 'white',
        padding: "5px 2px",
      },
      Games: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '15px 7px',
        fontWeight: 300,
        borderBottom: '0.1px solid lightgrey',
        zIndex:2,
      }
    }
    let handler = false;
    if(this.props.okselected[1] && this.props.selected==1){
      handler=true;
    }
    const menuOptions = this.props.menuOptions;
    const musicMenu = this.props.musicMenu;
    console.log(this.props.okselected[1])
    return (
      <div className="MenuItems" style={styles.MenuItems}>
        
        {  !handler && !this.props.okselected[1]?
          menuOptions.map((item, index) => {
            return (
              <div className={this.props.selected==index?"selected":"Game"}
              key={index}
              style={styles.Games}>
                <h3 >{item}</h3>
                <img
                id={this.props.selected==index?"selectedarrow":"arrow"}
                style={{ padding: 5 }}
                width="0" height="16" src="https://www.flaticon.com/svg/static/icons/svg/565/565870.svg" />

              </div>
            )
          }) : ''
        }
        {this.props.okselected[1]?
          menuOptions.map((item, index) => {
            return (
              <div
              className={this.props.selected==index?"selected":"Game"}
              style={styles.Games}
              key={index}
              >
              
              
              <h3 >{item}</h3>

              <img id={this.props.selected==index?"selectedarrow":"arrow"}
              style={{ padding: 5 }}
              width="0" height="16"  src="https://www.flaticon.com/svg/static/icons/svg/565/565870.svg" />
              
              </div>
            )
          }):''
        }{menuOptions.length==3?
          <div className="Backarrow">
           <h5>click on!</h5> <i class="fas fa-backward"></i>
          </div>:''
          
        }
        
      </div>

    );
  }
}

export default MenuItems;
