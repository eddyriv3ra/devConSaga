import { connect } from 'react-redux';
import AddEducation from './AddEducation';
import { getErrors } from '../auth/Errors.selector';
import { getProfile, getSuccess } from '../dashboard/Dashboard.selector';
import { addEducation } from '../../actions/profileActions';

const mapStateToProps = state => ({
  errors: getErrors(state),
  profile: getProfile(state),
  success: getSuccess(state),
});

const mapDispatchtoProps = dispatch => ({
  addEdu: (eduData) => dispatch(addEducation(eduData)),
})

export default connect(mapStateToProps, mapDispatchtoProps)(AddEducation);
