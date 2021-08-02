import React from 'react';
import * as firebase from 'firebase';
import 'firebase/firestore';
import PlayMusic from './Playmusic';

class Allsongs extends React.Component {
 constructor(){
   super();
   this.new_data_array = []
   this.state={
    All_Music: [],
    loading: true
   }
 }
  componentDidMount()
    {   
      // firebase
      //   .firestore()
      //   .collection('All Music')
      //   .get()
      //   .then((snapshot)=>{
      //     console.log(snapshot)
      //     snapshot.docs.map((doc)=>{
      //      console.log(doc.data()) 
      //     });
      //     const musics = snapshot.docs.map((doc)=>{
      //       const data= doc.data();
      //       data['id']= doc.id;
      //       return data;
      //     })
      //     this.setState({
      //       All_Music:musics,
      //       loading:false
      //     })
      //   });
      // console.log(firebase.storage().ref().listAll());
        firebase.storage().ref().child('/').listAll()
            .then((data) =>
            {
                data.items.forEach(async (ref) =>
                {
                    await ref.getDownloadURL()
                        .then((url) =>
                        {
                            this.new_data_array.push({ name: ref.name, url: url });
                            if (this.new_data_array.length === 7)//load the component when all the songs are added to the array.
                            {
                                this.setState({
                                  All_Music: this.new_data_array,
                                    loading: false
                                });
                            }
                        })
                        .catch((error) =>
                        {
                            console.log(error);
                        })
                })
            })
            .catch((error) =>
            {
                if (error)
                {
                    console.log(error);
                }
            })
    }
  render(){
    const styles={
      Allsongs:{
        position:'relative'
      },
        item:{
        // width:150,
        display:'block',
        justifyContent:'space-between',
        padding:'10px 0px',
        color:'white',
        fontWeight:300,
      }
    }
    if (this.props.songIndex !== -1)
        {
            return <PlayMusic
                songIndex={this.props.songIndex}
                Songs={this.state.All_Music}
                currentlyOnPlayMusicScreen={this.props.currentlyOnPlayMusicScreen}
                playPauseButtonClicked={this.props.playPauseButtonClicked}
            />;
        }
    return (this.state.loading ? 
            
        <div className='loading-screen'>
            <h1>Loading...</h1>
            <div className="loader"></div>
            <div>Please make sure that you are connected to the internet. Songs are fetched from the firebase storage.</div>
        </div>
        :
        <div className="all-songs">
            <h1 className="all-songs-heading">
                All Songs
            </h1>
            <div className="all-songs-list">
                {this.state.All_Music.map((item, index) =>
                {
                  // {this.props.currentMusicSelection === index ? 'selected-song' : ''}
                    return (
                        <div className={this.props.current_music_selection === index ? 'selected-song' : 'item'} key={index} style={styles.Allsongs}>
                            {item.name}
                        </div>
                    )
                })}
                <div className="instruction-all-songs">
                    Use "<i className="fas fa-backward"></i>" and "<i className="fas fa-forward"></i>" buttons to navigate.
                </div>
            </div>

        </div>
    );

  }
}

export default Allsongs;
