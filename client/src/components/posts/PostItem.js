import React, { Component } from 'react';
import classnames from 'classnames';
import { Link } from 'react-router-dom';

class PostItem extends Component {
  onDeleteClick = () => {
    const { deletePost, post } = this.props;
    deletePost(post._id)
  }
  render() {
    const { post, user } = this.props;
    return (
      <div className="card card-body mb-3">
        <div className="row">
          <div className="col-md-2">
            <a href="profile.html">
              <img className="rounded-circle d-none d-md-block" 
                src={post.avatar}
                alt="" />
            </a>
            <br />
            <p className="text-center">{post.name}</p>
          </div>
          <div className="col-md-10">
            <p className="lead">
              {post.text}
            </p>
            <button type="button" className="btn btn-light mr-1">
              <i className="text-info fas fa-thumbs-up"></i>
              <span className="badge badge-light">{post.likes.length}</span>
            </button>
            <button type="button" className="btn btn-light mr-1">
              <i className="text-secondary fas fa-thumbs-down"></i>
            </button>
            <Link to={`/post/${post._id}`} className="btn btn-info mr-1">
              Comments
            </Link>
            {post.user === user.id ? (
              <button onClick={this.onDeleteClick} type='button' className="btn btn-danger mr-1">
                <i className="fas fa-times" />
              </button>
            ) : null}
          </div>
        </div>
      </div>
    )
  }
}

export default PostItem;
