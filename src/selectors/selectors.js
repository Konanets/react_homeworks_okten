const getAuth=(state)=>state.authReducer;
const getCars=(state)=>state.carReducer;

export {
    getAuth,
    getCars
}