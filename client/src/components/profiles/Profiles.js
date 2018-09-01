import React, { Component } from "react";
import Spinner from "../common/Spinner";
import ProfileItem from "./ProfileItem";

class Profiles extends Component {
  componentDidMount() {
    this.props.getProfiles();
  }
  render() {
    const { profiles, loading } = this.props;
    let profileItems;

    if (profiles === null || loading) {
      profileItems = <Spinner />;
    } else {
      if (profiles.length > 0) {
        profileItems = profiles.map(profile => (
          <ProfileItem key={profile._id} profile={profile} />
        ));
      } else {
        profileItems = <h4>No profiles found...</h4>;
      }
    }
    return (
      <div className="profiles">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h4 className="display-4 text-center">Developer profiles</h4>
              <p className="lead text-center">
                Browse and connect with developers
              </p>
              {profileItems}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profiles;
