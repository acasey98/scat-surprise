import React from 'react';
import { Link } from 'react-router-dom';


class ScatCard extends React.Component {
  render() {
    const { scat } = this.props;
    const editLink = `/edit/${scat.id}`;
    return (
      <div className="ScatCard col-3">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{scat.sampleNum}</h5>
            <p className="card-text">{scat.location}</p>
            <Link className="btn btn-primary" to={editLink}>Edit</Link>
            {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
          </div>
        </div>
      </div>
    );
  }
}

export default ScatCard;
