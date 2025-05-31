import { useEffect } from 'react';
import useGetArtist  from '../hooks/useGetArtists';


function Home() {
    useEffect(() => {
        var result = useGetArtist("Sanele Jokweni");
        console.log(result);
    }, []);

    return <>
        <h1>Home</h1>
        </>
};

export default Home;