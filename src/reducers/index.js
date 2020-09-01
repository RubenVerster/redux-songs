import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    { title: 'I Wanna Rock', duration: '4.05' },
    { title: 'All Star', duration: '2.04' },
    { title: 'Girlfriend', duration: '3.04' },
    { title: 'Resonance', duration: '3.33' },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
