import React, { Component } from 'react';
import { Link } from 'react-router-dom';

 class ProfileGithub extends Component {
   state = {
    clientId: '4ce2cf27b59488f3f5d6',
    clientSecret: 'df0a0360b04fbe581f68d6af7426adac676c37c3',
    count: 5,
    sort: 'created: asc',
    repos: [],  
   }
   componentDidMount() {
    const { username } = this.props;
    const { count, sort, clientId, clientSecret } = this.state;

    fetch(`https://api.github.com/users/${username}/repos?per_page=${count}&sort=${sort}&client_id=${clientId}&client_secret=${clientSecret}`)
      .then(res => res.json())
      .then(data => {
        if(this.refs.myRef) {
          this.setState({repos: data})
        }
      })
      .catch(err => console.log('error', err))
   }
  render() {
    const { repos } = this.state;

    const repoItems = repos.map(repo => (
      <div key={repo.id} className='card card-body mb-2'>
        <div className="row">
          <div className="col-md-6">
            <h4>
              <Link to={repo.html_url} className='text-info' target='_blank'>
                {repo.name}
              </Link>
            </h4>
            <p>
              {repo.description}
            </p>
          </div>
          <div className="col-md-6">
            <span className="badge badge-info mr-1">
              Stars: {repo.stargazers_count}
            </span>
            <span className="badge badge-secondary mr-1">
              Stars: {repo.watchers_count}
            </span>
            <span className="badge badge-success">
              Stars: {repo.forks_count}
            </span> 
          </div>
        </div>
      </div>
    ))
    return (
      <div ref='myRef'>
        <hr/>
        <h3 className="mb-4">Latest Github Repos</h3>
        {repoItems}
      </div>
    )
  }
}

export default ProfileGithub;