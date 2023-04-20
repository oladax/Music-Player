const PlayerDetail = (props) => {
    return ( 
        <div className="playerdetail">
         <div className="img-detail">
         <img className="artist-img" src={props.song.img} alt=""/>
         </div>

    <div className="current-song-detail">  

    <h3 >{props.song.title}</h3>
         <h4 >{props.song.artist}</h4>
    </div>
        </div>
     );
}
 
export default PlayerDetail;