// Import the necessary components and hooks from the React library and other modules
import PlayerDetail from "./Playerdetail";
import PlayerControl from "./PlayerControl";
import { useEffect, useRef, useState } from "react";

// Define a functional component named Player that takes in props
const Player = (props) => {

  // Create a reference to an HTML <audio> element using the useRef hook
  const audioref = useRef(null);

  // Use the useState hook to manage the isplaying and currentSongIndex states
  const [isplaying, setisplaying] = useState(false);
  const [currentSongIndex, setcurrentSongIndex] = useState(0);

  // Use the useEffect hook to play or pause the audio based on the value of isplaying
  useEffect(() => {
    if (isplaying) {
      audioref.current.play();
    } else {
      audioref.current.pause();
    }
  });

  // Define a function to change the currentSongIndex state based on the forwards argument
  const skipsong = (forwards = true) => {
    if (forwards) {
      setcurrentSongIndex((currentIndex) => {
        let temp = currentIndex;
        temp++;

        if (temp > props.Songs.length - 1) {
          temp = 0;
        }
        return temp;
      });
    } else {
      setcurrentSongIndex((currentIndex) => {
        let temp = currentIndex;
        temp--;

        if (temp < 0) {
          temp = props.Songs.length - 1;
        }
        return temp;
      });
    }
  };

  // Render the HTML and other React components
  return (
    <div className="Player">

      {/* Render an <audio> element with a source of the current song's track */}
      <audio src={props.Songs[currentSongIndex].track} ref={audioref}></audio>

      {/* Render the "Playing now" heading and the PlayerDetail component with the current song */}
      <h4 className="playing-now">Playing now</h4>
      <PlayerDetail song={props.Songs[currentSongIndex]} />

      {/* Render the PlayerControl component with props and state variables */}
      <PlayerControl
        isplaying={isplaying}
        setisplaying={setisplaying}
        skipsong={skipsong}
      />

      {/* Render a paragraph with information about the next song in the playlist */}
      <p>
        <strong>Next up:</strong>{" "}
        {props.Songs[(currentSongIndex + 1) % props.Songs.length].title} by{" "}
        {props.Songs[(currentSongIndex + 1) % props.Songs.length].artist}
      </p>

    </div>
  );
};

// Export the Player component as the default export of the module
export default Player;
