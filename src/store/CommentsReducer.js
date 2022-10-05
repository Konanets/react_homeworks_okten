const commentsActions={
    SET_COMMENT:'SET_COMMENT',
    SET_COMMENTS:'SET_COMMENTS'
}

const init={
    comments:[],
    comment:null
}

const commentsReducer=(state=init,{type,payload})=>{
    switch (type) {
        case commentsActions.SET_COMMENTS:
            return {...state,comments:payload}
    }
    return state
}

export {commentsReducer,commentsActions}