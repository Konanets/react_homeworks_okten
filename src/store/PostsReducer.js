
const postsActions={
    SET_POSTS:'SET_POSTS',
    SET_POST:'SET_POST'
}

const init={
    posts:[],
    post:null
}

const postsReducer=(state=init,{type,payload})=>{
    console.log(payload)
    switch (type){
        case postsActions.SET_POSTS:
            return {...state,posts:payload}
        case postsActions.SET_POST:
            const post=state.posts.find(post=>post.id===payload)

            return {...state,post}
    }

    return state
}


export {postsReducer,postsActions}