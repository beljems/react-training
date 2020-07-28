import { GET_POSTS } from './postTypes';

const initialState = {
    posts: [],
    pagination: {},
    processing: false,
    updating: false,
    error: null
};

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case GET_POSTS:
          return {
            ...state,
            processing: true,
            updating: true,
            error: null
          };
        case `${GET_POSTS}_FAIL`:
          return {
            ...state,
            processing: false,
            updating: false,
            error: action.payload
          };
        case `${GET_POSTS}_SUCCESS`:
          return {
            ...state,
            processing: true,
            updating: true,
            error: null
          };
        default:
            return state;
     }
}
