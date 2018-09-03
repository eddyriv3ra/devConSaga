import React, { Component } from 'react';
import PostForm from './PorForm.container';
import Spinner from '../common/Spinner';
import PostFeed from './PostFeed';

class Posts extends Component {
  componentDidMount() {
    this.props.getPosts();
  }
  onDeleteComment= id => {
    this.props.deletePost(id);
  }
  render() {
    const { posts, loading, user } = this.props;
    let postContent;

    if(posts === null || loading) {
      postContent = <Spinner />
    } else {
      postContent = <PostFeed posts={posts} user={user} deletePost={this.onDeleteComment} />
    }

    return (
      <div className='feed'>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <PostForm />
              {postContent}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Posts;
