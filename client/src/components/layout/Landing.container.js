import { connect } from 'react-redux';
import Landing from './Landing';
import { getIsAuthenticated } from '../auth/Auth.selector';

const mapStateToProps = state => ({
  isAuthenticated: getIsAuthenticated(state),
})

export default connect(mapStateToProps)(Landing)