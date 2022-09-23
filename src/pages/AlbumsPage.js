import React, {useEffect, useState} from 'react';
import {getService} from "../services/jsonPlaceHolder.service";
import {Album} from "../components";

const AlbumsPage = () => {

    const [albums,setAlbums]=useState([]);

    useEffect(()=>{
        getService.getAlbums().then(({data})=>setAlbums(data))
    },[])


    return (
        <div>
            {albums.map(album=><Album key={album.id} album={album}/>)}
        </div>
    );
};

export {AlbumsPage};