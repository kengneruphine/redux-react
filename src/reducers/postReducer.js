import { FETCH_POSTS, NEW_POST } from '../actions/type';

const initialState = {
    items: [],  //all the posts from the backend
    item:{} //a single post to be added
}

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_POSTS:
            return {
                ...state,
                items: action.payload
            }
            case NEW_POST:
                return {
                    ...state,
                    item: action.payload
                }
        default:
            return state;
    }
}