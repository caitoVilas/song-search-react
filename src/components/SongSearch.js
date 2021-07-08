import { useState } from "react";
import SongDetails from "./SongDetails";
import SongForm from "./SongForm";
import Loader from "./Loader";

const SongSearch = () => {
    const [search, setSearch] = useState(null);
    const [lyric, setLiric] = useState(null);
    const [bio, setBio] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleSearch = (data)=> {
        setSearch(data);
    };

    return(
        <div>
            <h1>Buscador de Canciones</h1>
            {loading && <Loader />}
            <SongForm handleSearch={handleSearch} />
            <SongDetails search={search}
                         lyric={lyric}
                         bio={bio} />
        </div>
    );
}

export default SongSearch;