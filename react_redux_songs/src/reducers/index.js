import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "Sia - Cheap Thrills", duration: "4:21" },
    { title: "Sia - Chandelier", duration: "3:51" },
    { title: "David Guetta & Sia - Flames", duration: "3:13" },
    { title: "Sia - The Greatest", duration: "5:51" }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
