import { createSelector } from 'reselect';

const authSelector = state => state.get('auth')

export const getUser = createSelector(
  authSelector,
  (auth) => auth.get('user')
);

export const getIsAuthenticated = createSelector(
  authSelector,
  (auth) => auth.get('isAuthenticated')
);
