import { createSelector } from 'reselect';

const errorSelector = state => state.get('errors');

export const getErrors = createSelector(
  errorSelector,
  (errors) => errors.get('errors')
)