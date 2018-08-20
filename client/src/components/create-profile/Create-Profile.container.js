import { connect } from 'react-redux';
import CreateProfile from './Create-Profile';
import { getErrors } from '../auth/Errors.selector';
import { getSuccess } from '../dashboard/Dashboard.selector';
import { createProfile } from '../../actions/profileActions';

const mapDispatchToProps = dispatch => ({
  createProfile: profileData => dispatch(createProfile(profileData)),
})

const mapStateToProps = state => ({
  errors: getErrors(state),
  success: getSuccess(state),
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateProfile);