import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

import scatData from '../../helpers/data/scatData';

const defaultScat = {
  sampleNum: '',
  location: '',
  weight: '',
  color: '',
  animal: '',
};

class NewScat extends React.Component {
  state = {
    newScat: defaultScat,
  }

  formFieldStringState = (e) => {
    e.preventDefault();
    const tempScat = { ...this.state.newScat };
    tempScat[e.target.id] = e.target.value;
    this.setState({ newScat: tempScat });
  }

  formSubmit = (e) => {
    e.preventDefault();
    const saveMe = { ...this.state.newScat };
    saveMe.uid = firebase.auth().currentUser.uid;
    console.error('save thing', saveMe);
    scatData.postNewScat(saveMe)
      .then(() => this.props.history.push('/home'))
      .catch(err => err);
  }

  render() {
    const { newScat } = this.state;
    return (
      <div className="NewScat">
        <form onSubmit={this.formSubmit}>
          <div className="form-group">
            <label htmlFor="sampleNum">Sample Num</label>
            <input
              type="text"
              className="form-control"
              id="sampleNum"
              placeholder="Sample2"
              value={newScat.sampleNum}
              onChange={this.formFieldStringState}
            />
          </div>
          <div className="form-group">
            <label htmlFor="color">Color</label>
            <input
              type="text"
              className="form-control"
              id="color"
              placeholder="color"
              value={newScat.color}
              onChange={this.formFieldStringState}
            />
          </div>
          <div className="form-group">
            <label htmlFor="location">Sample Num</label>
            <input
              type="text"
              className="form-control"
              id="location"
              placeholder="location"
              value={newScat.location}
              onChange={this.formFieldStringState}
            />
          </div>
          <div className="form-group">
            <label htmlFor="animal">animal</label>
            <input
              type="text"
              className="form-control"
              id="animal"
              placeholder="animal"
              value={newScat.animal}
              onChange={this.formFieldStringState}
            />
          </div>
          <div className="form-group">
            <label htmlFor="weight">weight</label>
            <input
              type="text"
              className="form-control"
              id="weight"
              placeholder="weight"
              value={newScat.weight}
              onChange={this.formFieldStringState}
            />
          </div>
          <button
          type="submit"
          className="btn btn-primary"
          >Save New Scat</button>
        </form>
      </div>
    );
  }
}

export default NewScat;
