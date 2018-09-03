import { takeEvery, all, put, takeLatest } from 'redux-saga/effects';
import {
  ADD_POST,
  GET_POSTS,
  DELETE_POST,
} from '../constants';
import {
  addPostSuccess,
  getPostsSuccess,
  deletePostSuccess,
} from '../actions/postAction';
import {
  authErrors
} from '../actions/authActions';
import {
  addPostSubmit,
} from '../components/posts/addPost.service';
import {
  deletePostSubmit
} from '../components/posts/deletePost.service';
import { getPostsSubmit } from '../components/posts/getPosts.service'

export function* addPostRequest(action) {
  try {
    const res = yield addPostSubmit(action.postData)
    yield put(addPostSuccess(res.data));
  }catch (e){
    yield put(authErrors(e.response.data))    
  }
}

export function* getPostsRequest() {
  try {
    const res = yield getPostsSubmit()
    yield put(getPostsSuccess(res.data));
  }catch (e){
    yield put(authErrors(e.response.data))    
  }
}

export function* deletePostRequest(action) {
  try {
    const res = yield deletePostSubmit(action.id);
    yield put(deletePostSuccess(res.data));
  }catch (e){
    yield put(authErrors(e.response.data))    
  }
}


export default function* root() {
  yield all([
    takeEvery(ADD_POST, addPostRequest),
    takeEvery(GET_POSTS, getPostsRequest),
    takeLatest(DELETE_POST, deletePostRequest),
  ])
}