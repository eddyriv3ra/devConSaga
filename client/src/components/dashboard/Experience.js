import React, { Component } from 'react';
import Moment from 'react-moment';

class Experience extends Component {
  delClick = id => {
    this.props.onDeleteClickExp(id)
  }
  render() {
    const experience = this.props.experience.map(exp => {
      return (
        <tr key={exp._id}>
        <td>{exp.company}</td>
        <td>{exp.title}</td>
        <td>
          <Moment format='YYYY/MM/DD'>{exp.from}</Moment> - 
          {exp.to === null ? (' Now') : <Moment format='YYYY/MM/DD'>{exp.to}</Moment>}
        </td>
        <td>
          <button 
            className="btn btn-danger"
            onClick={() => this.delClick(exp._id)}>
            Delete
          </button>
          </td>
      </tr>
      )
    });
    return (
      <div>
        <h4 className='mb-4'>Experience Credentials</h4>
        <table className='table'>
          <thead>
            <tr>
              <th>Company</th>
              <th>Title</th>
              <th>Years</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {experience}
          </tbody>
        </table>
      </div>
    )
  }
}

export default Experience;