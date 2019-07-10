import React from 'react';
import { Link } from 'react-router-dom';
import scatData from '../../helpers/data/scatData';

class SingleScat extends React.Component {
  render() {
    const editLink = `/edit/${this.props.match.params.id}`;
    return (
      <div className="SingleScat">
        <div>Scat Surprise</div>
        <Link className="btn btn-primary" to={editLink}>Edit</Link>
      </div>
    );
  }
}

export default SingleScat;
