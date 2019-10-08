import React, { Component } from "react";
import { connect } from "react-redux";
import { selectSong } from "../actions";

class SongList extends Component {
  renderList() {
    return this.props.songs.map(song => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button
              className="ui button primary"
              onClick={() => this.props.selectSong(song)}
            >
              Select
            </button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    });
  }

  render() {
    //console.log(this.props.songs); //this.props === { songs: state.songs }
    return <div className="ui divided list">{this.renderList()}</div>;
  }
}

//take state/store -> return as props in Component
const mapStateToProps = state => {
  console.log(state); //to see update of state

  return { songs: state.songs };
};

//component -> connector -> Provider -> Store
//actionCreator -> action -> connector -> dispatch to reducer -> provider -> state/store
export default connect(
  mapStateToProps,
  { selectSong }
)(SongList); //function that returns a function
