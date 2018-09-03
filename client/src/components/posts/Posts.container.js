import { connect } from 'react-redux';
import Posts from './Posts';
import { getAllPosts } from './posts.selector';
import { getPosts, deletePost } from '../../actions/postAction';
import { getUser } from '../auth/Auth.selector';

const mapStateToProps = state => ({
  posts: getAllPosts(state).toJS(),
  user: getUser(state),
})

const mapDispatchToProps = dispatch => ({
  getPosts: () => dispatch(getPosts()),
  deletePost: id => dispatch(deletePost(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Posts);