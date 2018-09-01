import React, { Component } from 'react';
import ProfileHeader from './ProfileHeader';
import ProfileAbout from './ProfileAbout';
import ProfileCreds from './ProfileCreds';
import ProfileGithub from './ProfileGithub';
import Spinner from '../common/Spinner';
import { Link, withRouter } from 'react-router-dom';

class Profile extends Component {
  componentDidMount() {
    if(this.props.match.params.handle) {
      this.props.getProfileByHandle(this.props.match.params.handle)
    }
  }
  componentWillReceiveProps(nextProps) {
    if(nextProps.profile === null && this.props.loading) {
      this.props.history.push('/not-found')
    }
  }
  
  render() {
    const { profile, loading } = this.props;
    let profileContent;

    if(profile === null || loading) {
      profileContent = <Spinner />
    } else {
      profileContent = (
        <div>
          <div className="row">
            <div className="col-md-6">
              <Link to='/profiles' className='btn btn-light mb-3 float-left'>
                Back to profiles
              </Link>
            </div>
            <div className="col-md-6"></div>
          </div>
          <ProfileHeader profile={profile}/>
          <ProfileAbout profile={profile} />
          <ProfileCreds education={profile.education} experience={profile.experience}/>
          {profile.githubusername ? (<ProfileGithub username={profile.githubusername}/>): null}
        </div>
      )
    }
    return (
      <div className='profile'>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              {profileContent}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(Profile)