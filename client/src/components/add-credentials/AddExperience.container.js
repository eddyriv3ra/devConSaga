import { connect } from 'react-redux';
import AddExperience from './AddExperience';
import { getErrors } from '../auth/Errors.selector';
import { getProfile, getSuccess } from '../dashboard/Dashboard.selector';
import { addExperience } from '../../actions/profileActions';

const mapStateToProps = state => ({
  errors: getErrors(state),
  profile: getProfile(state),
  success: getSuccess(state),
});

const mapDispatchtoProps = dispatch => ({
  addExp: (expData) => dispatch(addExperience(expData)),
})

export default connect(mapStateToProps, mapDispatchtoProps)(AddExperience);
