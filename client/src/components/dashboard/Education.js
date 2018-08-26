import React, { Component } from 'react';
import Moment from 'react-moment';

class Education extends Component {
  delClick = id => {
    this.props.onDeleteClickEdu(id);
  }
  render() {
    const education = this.props.education.map(edu => {
      return (
        <tr key={edu._id}>
        <td>{edu.school}</td>
        <td>{edu.degree}</td>
        <td>
          <Moment format='YYYY/MM/DD'>{edu.from}</Moment> - 
          {edu.to === null ? (' Now') : <Moment format='YYYY/MM/DD'>{edu.to}</Moment>}
        </td>
        <td>
          <button 
            className="btn btn-danger"
            onClick={() => this.delClick(edu._id)}>
            Delete
          </button>
          </td>
      </tr>
      )
    });
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