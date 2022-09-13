

const getCaracters=()=>{
    return fetch('https://rickandmortyapi.com/api/character').then(date=>date.json())
}

export {getCaracters}