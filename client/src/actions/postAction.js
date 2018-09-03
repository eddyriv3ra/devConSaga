import {
  ADD_POST,
  ADD_POST_SUCCESS,
  GET_POSTS,
  GET_POSTS_SUCCESS,
  DELETE_POST,
  DELETE_POST_SUCCESS,
} from '../constants';

// Add post
export const addPost = postData => ({
  type: ADD_POST,
  postData,
});

export const addPostSuccess = data => ({
  type: ADD_POST_SUCCESS,
  data,
});

export const getPosts = () => ({
  type: GET_POSTS,
});

export const getPostsSuccess = data => ({
  type: GET_POSTS_SUCCESS,
  data,
});

export const deletePost = id => ({
  type: DELETE_POST,
  id,
});

export const deletePostSuccess = data => ({
  type: DELETE_POST_SUCCESS,
  data,
})
