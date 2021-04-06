import './App.css';
import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {SearchResults: 
      [
        {id:'CCC', name: 'Cem', artist:'Cem', album:'Cem'},
        {id: 'RRR', name: 'Rex', artist:'Rex', album:'Rex'},
        {id: 'MMM', name: 'Muge', artist:'Muge', album:'Muge'}
      ],
      playlistName: 'myplaylist',
      playlistTracks : [
        {id:'CCC', name: 'Cem', artist:'Cem', album:'Cem'},
        {id: 'RRR', name: 'Rex', artist:'Rex', album:'Rex'},
        {id: 'MMM', name: 'Muge', artist:'Muge', album:'Muge'}  
      ]
    };
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
  }

  addTrack(track) {
    let tracks = this.state.playlistTracks;
    if (tracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    }
    tracks.push(track);
    this.setState({playlistTracks: tracks});
  }

  removeTrack(track) {
    const tracks = this.state.playlistTracks;
    const newTracks = tracks.filter(savedTrack => savedTrack !== track);
    this.setState({playlistTracks: newTracks});  
  }

  updatePlaylistName(name) {
    this.setState({
      playlistName: name  
    })
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.SearchResults} onAdd = {this.addTrack}/>
            <Playlist onRemove = {this.removeTrack}
                      playlistName = {this.state.playlistName} 
                      playlistTracks = {this.state.playlistTracks}
                      onNameChange = {this.updatePlaylistName}/>
          </div>
        </div>
    </div>
    )
  }
}

export default App;
