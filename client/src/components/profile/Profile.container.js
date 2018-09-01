import { connect } from 'react-redux';
import Profile from './Profile';
import { getProfile, getStatus } from '../dashboard/Dashboard.selector';
import { getProfileByHandle } from '../../actions/profileActions';

const mapStateToProps = state => ({
  profile: getProfile(state),
  loading: getStatus(state),
});

const mapDispatchtoProps = dispatch => ({
  getProfileByHandle: handle => dispatch(getProfileByHandle(handle)),
});

export default connect(mapStateToProps, mapDispatchtoProps)(Profile)