import { connect } from 'react-redux';
import Dashboard from './Dashboard';
import { getCurrentProfile, deleteAccount, deleteExperience, deleteEducation } from '../../actions/profileActions';
import { getProfile, getStatus } from './Dashboard.selector';
import { getUser } from '../auth/Auth.selector';

const mapStateToProps = state => ({
  profile: getProfile(state),
  user: getUser(state),
  loading: getStatus(state),
});

const mapDispatchToProps = dispatch => ({
  getCurrentProfile: () => dispatch(getCurrentProfile()),
  deleteAccount: () => dispatch(deleteAccount()),
  deleteExperience: id => dispatch(deleteExperience(id)),
  deleteEducation: id => dispatch(deleteEducation(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);