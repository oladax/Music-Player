// Importing required modules and icons from Font Awesome library
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faForward, faBackward, faPlay, faPause } from '@fortawesome/free-solid-svg-icons'

const PlayerControl = (props) => {
  return ( 
    <div className='playercontrol'>
      <button className='backward-btn' onClick={() => props.skipsong(false)}>
        {/* A button to skip the current song backward, which calls skipsong() function with false parameter when clicked */}
        <FontAwesomeIcon icon={faBackward} />
        {/* The button displays the faBackward icon */}
      </button>  
      <button className='playbtn' onClick={() => props.setisplaying(!props.isplaying)}>
        {/* A button to play or pause the media player, which toggles isplaying state when clicked */}
        <FontAwesomeIcon icon={props.isplaying ? faPause : faPlay} />
        {/* The button displays the faPause icon if the media player is currently playing, and faPlay icon otherwise */}
      </button> 
      <button className='forward-btn' onClick={() => props.skipsong()}>
        {/* A button to skip the current song forward, which calls skipsong() function without parameter when clicked */}
        <FontAwesomeIcon icon={faForward} />
        {/* The button displays the faForward icon */}
      </button>  
    </div>
  );
}

// A functional component that takes in props object and returns JSX elements

export default PlayerControl;
// Exporting the PlayerControl component for use in other modules
