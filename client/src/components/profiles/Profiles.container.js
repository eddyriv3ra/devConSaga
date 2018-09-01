import { connect } from 'react-redux';
import { getProfiles } from '../../actions/profileActions';
import { getAllProfiles, getStatus } from '../dashboard/Dashboard.selector';
import Profiles from './Profiles';

const mapStateToProps = state => ({
  profiles: getAllProfiles(state),
  loading: getStatus(state),
})

const mapDispatchToProps = dispatch => ({
  getProfiles: () => dispatch(getProfiles())
})

export default connect(mapStateToProps, mapDispatchToProps)(Profiles);