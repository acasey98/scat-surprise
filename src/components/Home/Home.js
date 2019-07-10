import React from 'react';
import { Link } from 'react-router-dom';

import firebase from 'firebase/app';
import 'firebase/auth';
import scatData from '../../helpers/data/scatData';

import ScatCard from '../ScatCard/ScatCard';

class Home extends React.Component {
  state = {
    scats: [],
  }

  componentDidMount() {
    const { uid } = firebase.auth().currentUser;
    scatData.getMyScats(uid)
      .then((scats) => {
        this.setState({ scats });
      })
      .catch(err => err);
  }

  editEvent = (e) => {
    e.preventDefault();
    const orderId = '12345';
    this.props.history.push(`/edit/${orderId}`);
  }

  render() {
    const makeScatCards = this.state.scats.map(scat => (
      <ScatCard
        key={scat.id}
        scat={scat}
      />
    ));
    const singleLink = '/scat/12345';
    return (
      <div className="Home col-9">
        <div>Home</div>
        <div className="d-flex">
          {makeScatCards}
        </div>
        <button className="btn btn-danger" onClick={this.editEvent}>Edit</button>
        <Link to={singleLink}>View Single</Link>
      </div>
    );
  }
}

export default Home;
