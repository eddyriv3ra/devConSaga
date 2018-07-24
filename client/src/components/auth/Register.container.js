import { connect } from "react-redux";
import Register from './Register';
import { submitUser } from '../../actions/authActions';
import { getErrors } from './Errors.selector'

const mapStateToProps = state => ({
  errors: getErrors(state)
});

const mapDispatchToProps = dispatch => ({
  submitUser: (userData) => dispatch(submitUser(userData))
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);
