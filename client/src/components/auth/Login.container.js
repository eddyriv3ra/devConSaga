import { connect } from 'react-redux';
import Login from './Login.jsx';
import { loginUser } from '../../actions/authActions';
import { getErrors } from './Errors.selector'

const mapStateToProps = state => ({
  errors: getErrors(state),
})

const mapDispatchToProps = dispatch => ({
  loginUser: (userData) => dispatch(loginUser(userData)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)