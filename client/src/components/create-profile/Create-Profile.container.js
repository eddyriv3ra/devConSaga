import { connect } from 'react-redux';
import CreateProfile from './Create-Profile';
import { getProfile } from '../dashboard/Dashboard.selector';
import { getErrors } from '../auth/Errors.selector';
import { createProfile } from '../../actions/profileActions';

const mapDispatchToProps = dispatch => ({
  createProfile: profileData => dispatch(createProfile(profileData)),
})

const mapStateToProps = state => ({
  profile: getProfile(state),
  errors: getErrors(state),
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateProfile);