import SongArtist from "./SongArtist";
import SongLirics from "./SongLirics";

const SongDetails = ({search, lyric, bio}) => {
    return(
        <div>
            <h2>Detalle de Canciones</h2>
            <SongArtist />
            <SongLirics />
        </div>
    );
}

export default SongDetails;