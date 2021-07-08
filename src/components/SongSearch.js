import { useEffect, useState } from "react";
import SongDetails from "./SongDetails";
import SongForm from "./SongForm";
import Loader from "./Loader";
import {serviceHttp} from "./services/serviceHttp";

const SongSearch = () => {
    const [search, setSearch] = useState(null);
    const [lyric, setLiric] = useState(null);
    const [bio, setBio] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
       if(search === null) return;
       const fetchData = async () => {
        const {artist, song} = search;
        let artisURL = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artist}`;
        let songURL = `https://api.lyrics.ovh/v1/${artist}/${song}`;
        console.log(artisURL, songURL);
        setLoading(true);
        const [artistRes, songRes] = await Promise.all([serviceHttp().get(artisURL), serviceHttp().get(songURL)]);
        console.log(artistRes, songRes);
        setBio(artistRes);
        setLiric(songRes);
        setLoading(false);

       };
       fetchData();
    },[search]);

    const handleSearch = (data)=> {
        setSearch(data);
    };

    return(
        <div>
            <h1>Buscador de Canciones</h1>
            {loading && <Loader />}
            <SongForm handleSearch={handleSearch} />
            {search && !loading &&
            <SongDetails search={search}
                         lyric={lyric}
                         bio={bio} />}
        </div>
    );
}

export default SongSearch;