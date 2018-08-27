import React, { Component } from 'react';
import Row from './Row';

class Education extends Component {
  render() {
    const education = this.props.education.map(edu => (
      <Row 
        edu={edu}
        delClick={this.props.onDeleteClickEdu}
      />
    ));
    
    return (
      <div>
        <h4 className='mb-4'>Education Credentials</h4>
        <table className='table'>
          <thead>
            <tr>
              <th>School</th>
              <th>Degree</th>
              <th>Years</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {education}
          </tbody>
        </table>
      </div>
    )
  }
}

export default Education;