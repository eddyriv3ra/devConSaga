import { connect } from 'react-redux';
import PostForm from './PostForm';
import { addPost } from '../../actions/postAction';
import { getErrors } from '../auth/Errors.selector'
import { getIsAuthenticated, getUser } from '../auth/Auth.selector';

const mapStateToProps = state => ({
  errors: getErrors(state),
  isAuth: getIsAuthenticated(state),
  user: getUser(state)
})

const mapDispatchToProps = dispatch => ({
  addPost: postData => dispatch(addPost(postData))
});

export default connect(mapStateToProps, mapDispatchToProps)(PostForm)