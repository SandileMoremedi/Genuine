import database from '../backend/supabaseConnection.js'; // @ts-ignore

async function s(artistName: string): Promise<any> {
    const artist = await database`select * from artists where name = ${artistName}`;
    return artist;
}

export default useGetArtist;