import React, { Component } from 'react'
import Moment from 'react-moment';

 class Row extends Component {
  onClick = () => {
    const { delClick,  edu } = this.props;
    delClick(edu._id)
  }

  render () {
    const { edu } = this.props
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
              onClick={this.onClick}>
              Delete
            </button>
            </td>
        </tr>
      )
    }
 }

export default Row;