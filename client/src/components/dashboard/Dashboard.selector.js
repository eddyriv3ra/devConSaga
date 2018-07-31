import { createSelector } from 'reselect';

const profileSelector = state => state.get('profile');

export const getProfile = createSelector(
  profileSelector,
  (profile) => profile.get('profile')
);

export const getStatus = createSelector(
  profileSelector,
  (profile) => profile.get('loading')
)
