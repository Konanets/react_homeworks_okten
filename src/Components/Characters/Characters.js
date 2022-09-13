import React, {useEffect, useState} from "react";
import {getCaracters} from "../../Services/character.service";
import CharatcerInfo from "./CharatcerInfo/CharatcerInfo";





const Charatcers = ({dateFunction}) => {

    let [characters,setCharacters]=useState([])

    useEffect(()=>{
        dateFunction().then(date=>setCharacters(date.results))
    },[])

    return(
        <div>

            {characters.map(character=> <CharatcerInfo charatcer={character} />)}
        </div>
    )
}

export default Charatcers