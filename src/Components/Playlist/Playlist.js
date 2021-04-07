import React from 'react';
import TrackList from '../TrackList/TrackList';
import './Playlist.css';

class PlayList extends React.Component {
    constructor(props) {
        super(props);
        this.handleNameChange = this.handleNameChange.bind(this);
    }

    handleNameChange(e) {
        const newName = e.target.value;
        this.props.onNameChange(newName);
    }
    
    render() {
        return (
            <div className="Playlist">
                <input onChange={this.handleNameChange} value={this.props.playlistName}/>
                <TrackList tracks = {this.props.playlistTracks} onRemove = {this.props.onRemove} isRemoval = {true}/>
                <button className="Playlist-save" onClick = {this.props.onSave}>SAVE TO SPOTIFY</button>
            </div>
        )
    }
}

export default PlayList;