import React, { Component } from 'react';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';

class PostForm extends Component {
  state = {
    text: '',
    errors: {},
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.errors) {
      this.setState({errors: nextProps.errors})
    }
  }

  onSubmit = e => {
    e.preventDefault();
    const { user } = this.props;

    const newPost = {
      text: this.state.text,
      name: user.name,
      avatar: user.avatar,
    }

    this.props.addPost(newPost);
    this.setState({ text: ''})
  }

  onChange = e => {
    this.setState({[e.target.name]: e.target.value})
  }

  render() {
    return (
      <div className='post-form mb-3'>
        <div className="card card-info">
          <div className="card-header bg-info text-white">
            Say Something
          </div>
          <div className="card-body">
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <TextAreaFieldGroup 
                  placeholder='create a post'
                  name='text'
                  value={this.state.text}
                  onChange={this.onChange}
                  error={this.state.errors.text}
                />
              </div>
              <button type='submit' className='btn btn-dark'>Submit</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default PostForm; 
