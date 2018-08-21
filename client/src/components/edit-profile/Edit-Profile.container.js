import { connect } from 'react-redux';
import EditProfile from './Edit-Profile';
import { getErrors } from '../auth/Errors.selector';
import { getSuccess, getProfile } from '../dashboard/Dashboard.selector';
import { createProfile, getCurrentProfile } from '../../actions/profileActions';
import isEmpty from '../../validation/is-Empty'

const mapDispatchToProps = dispatch => ({
  createProfile: profileData => dispatch(createProfile(profileData)),
  getCurrentProfile: () => dispatch(getCurrentProfile()),
  isEmpty,
})

const mapStateToProps = state => ({
  errors: getErrors(state),
  success: getSuccess(state),
  profile: getProfile(state),
})

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);