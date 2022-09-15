const _url='https://api.spacexdata.com/v3/launches'

const getLaunchesFiltered=()=>fetch(_url+'?filter=(mission_name,launch_year)/links(mission_patch_small)').then(value => value.json())

export {getLaunchesFiltered}