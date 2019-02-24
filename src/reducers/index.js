import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    {
      title: "No Scrubs",
      duration: "4:05"
    },
    {
      title: "Marcena",
      duration: "2:05"
    },
    {
      title: "test",
      duration: "3:23"
    },
    {
      title: "index",
      duration: "5:15"
    }
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
