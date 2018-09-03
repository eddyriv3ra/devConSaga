import { Map, List, fromJS } from 'immutable';
import {
  ADD_POST_SUCCESS,
  GET_POSTS_SUCCESS,
  GET_POSTS,
  DELETE_POST_SUCCESS,
} from '../constants';

const initialstate = new Map({
  posts: new List([]),
  post: new Map({}),
  loading: false,
});

const posts = (state = initialstate, action) => {
  switch(action.type) {
    case GET_POSTS:
      return state
        .set('loading', true)
    case ADD_POST_SUCCESS:
      return state
        .insert('posts', fromJS(action.data))
    case GET_POSTS_SUCCESS:
      return state
        .set('posts', fromJS(action.data))
        .set('loading', false)
    case DELETE_POST_SUCCESS:
        const postIndex = state.get('posts')
          .findIndex(item => item.get('_id') === action.data._id);
      return state
        .deleteIn(['posts', postIndex]);
    
      default: 
      return state;
  }
}

export default posts;
