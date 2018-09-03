import { connect } from 'react-redux';
import PostItem from './PostItem';
import { getUser } from '../auth/Auth.selector';

const mapStateToProps = state => ({
  user: getUser(state).toJS(),
})

export default connect(mapStateToProps)(PostItem)