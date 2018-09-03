import { createSelector } from 'reselect';

const postSelector = state => state.get('post')

export const getAllPosts = createSelector(
  postSelector,
  (post) => post.get('posts')
);

export const getPost = createSelector(
  postSelector,
  (post) => post.get('post')
);
