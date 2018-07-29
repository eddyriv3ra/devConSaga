import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authActions';
import Navbar from './Navbar';
import { getUser, getIsAuthenticated } from '../auth/Auth.selector'

const mapStateToProps = state => ({
  user: getUser(state),
  isAuthenticated: getIsAuthenticated(state),
})

const mapDispatchToProps = dispatch => ({
  logoutUser: () => dispatch(logoutUser())
})

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
