import Player from './Components/Player';
import { useState, useEffect } from 'react';
import './App.css';

function App() {

  /*/
  This declares the App 
  component and initializes three state variables using the useState hook.
   currentSongIndex and setcurrentSongIndex are used to keep track of the index of the currently playing song, while nextSongIndex and setnextSongIndex are used to keep track of the index of the next song to play. The Songs variable is an array of objects, each representing a song, that is initialized with data for multiple songs.
/*/

  const [currentSongIndex, setcurrentSongIndex] = useState(0);
  const [nextSongIndex, setnextSongIndex] = useState(currentSongIndex + 1);
  const [Songs] = useState([
    // more song objects Songs

    {
      title: "Godly",
      artist: "Omah-Lay",
      img: "./Artiste/omah1.jpg",
      track: "./Music collection/Omah-Lay-–-Godly.mp3"
    },

    {
      title: "Choko_Milo",
      artist: "Olamide",
      img: "./Artiste/olamide1.jpg",
      track: "./Music collection/Olamide_Choko_Milo_9jaflaver.com_.mp3"
    },

    {
      title: "Bad-Type",
      artist: "Seyi-Vibz",
      img: "./Artiste/seyi1.jpg",
      track: "./Music collection/Seyi-Vibez-Bad-Type.mp3"
    },

    {
      title: "KPK-Ko-Por-Ke",
      artist: "Rexxie-ft-Mohbad",
      img: "./Artiste/mohbad1.jpg",
      track: "./Music collection/Rexxie-X-Mohbad-KPK-Ko-Por-Ke.mp3"
    },

    {
      title: "catalyst",
      artist: "Seyi-Vibez",
      img: "./Artiste/seyi2.jpg",
      track: "./Music collection/seyi-vibez-catalyst.mp3"
    },


    {
      title: "Vibration",
      artist: "Fireboy-DML",
      img: "./Artiste/fireboy.jpg",
      track: "./Music collection/Fireboy_DML_Vibration_9jaflaver.com_.mp3"
    },


    {
      title: "pay-day",
      artist: "Seyi-Vibez",
      img: "./Artiste/seyi3.jpg",
      track: "./Music collection/seyi-vibez-pay-day-prod-by-ajeondmix-.mp3"
    },


    {
      title: "Infinity",
      artist: "Olamide-ft-Omah-Lay",
      img: "./Artiste/olamide2.jpg",
      track: "./Music collection/Olamide-Infinity-ft-Omah-Lay-(JustNaija.com).mp3"
    },
 

    {
      title: "Eru",
      artist: "Olamide",
      img: "./Artiste/olamide3.jpg",
      track: "./Music collection/Olamide-Eru-file-(JustNaija.com).mp3"
    },

    {
      title: "Tesumole",
      artist: "Naire- Marley",
      img: "./Artiste/naira.jpg",
      track: "./Music collection/Naira-Marley-–-Tesumole.mp3"
    },

  ]);

  /*/
  This sets up a side effect using the useEffect hook that 
  updates the nextSongIndex state variable whenever the currentSongIndex variable changes. 
  The function passed to setnextSongIndex uses a conditional statement to determine the index of the next song to play based on the 
  current song index and the length of the Songs array.
  /*/
  useEffect(() => {
    setnextSongIndex(() => {
      if (currentSongIndex + 1 > Songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  },[currentSongIndex]);



  return (
    /*/
    This renders the Player component, passing in the state variables currentSongIndex,
     setcurrentSongIndex, nextSongIndex, and Songs as props. 
    The Player component is wrapped in a div element with the class name App.
    /*/
    <div className="App">
      <Player
        currentSongIndex={currentSongIndex}
        setcurrentSongIndex={setcurrentSongIndex}
        nextSongIndex={nextSongIndex}
        Songs={Songs}
      />
    </div>
  );
}

export default App;
