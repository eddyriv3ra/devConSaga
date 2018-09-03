import React, { Component } from 'react';
import PostItem from './PostItem';

class PostFeed extends Component {
  render() {
    const { posts, user, deletePost } = this.props;
    return posts.map(post => <PostItem
      key={post._id}
      post={post}
      user={user}
      deletePost={deletePost}
    />)
  }
}

export default PostFeed;
