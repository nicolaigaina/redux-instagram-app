// a reducer takes in two things:
// 1. the action (info about what happened)
// 2. copy of current state

function comments(state=[], action){
    if(typeof action.postId !== 'undefined'){
        return{
            // take the current state
            ...state,
            //overwrite this post with a new one
            [action.postId]: postComments(state[action.postId],action)
        }
    }
    return state;
}

function postComments(state=[], action){
    switch(action.type){
        case 'ADD_COMMENT':
            //return the existing state + new comments
            return [...state, {
                user: action.author,
                text: action.comment
            }];
        case 'REMOVE_COMMENT':
            return [
                ...state.slice(0,action.index),
                ...state.slice(action.index + 1)
            ]
        default:
         return state; 
    }

}

export default comments;