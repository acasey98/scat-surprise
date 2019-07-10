import React from 'react';

import scatData from '../../helpers/data/scatData';

const defaultScat = {
  sampleNum: '',
  location: '',
  weight: '',
  color: '',
  animal: '',
  uid: '',
};

class EditScat extends React.Component {
  state = {
    editScat: defaultScat,
  }

  componentDidMount() {
    const scatId = this.props.match.params.id;
    scatData.getSingleScat(scatId)
      .then(scatPromise => this.setState({ editScat: scatPromise.data }))
      .catch(err => console.error('could not find scat', err));
  }

  formFieldStringState = (e) => {
    e.preventDefault();
    const tempScat = { ...this.state.editScat };
    tempScat[e.target.id] = e.target.value;
    this.setState({ editScat: tempScat });
  }

  formSubmit = (e) => {
    e.preventDefault();
    const saveMe = { ...this.state.editScat };
    const scatId = this.props.match.params.id;
    scatData.editScat(scatId, saveMe)
      .then(() => this.props.history.push('/home'))
      .catch(err => err);
  }

  render() {
    const { editScat } = this.state;
    return (
      <div className="EditScat">
        <form onSubmit={this.formSubmit}>
          <div className="form-group">
            <label htmlFor="sampleNum">Sample Num</label>
            <input
              type="text"
              className="form-control"
              id="sampleNum"
              placeholder="Sample2"
              value={editScat.sampleNum}
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
              value={editScat.color}
              onChange={this.formFieldStringState}
            />
          </div>
          <div className="form-group">
            <label htmlFor="location">location</label>
            <input
              type="text"
              className="form-control"
              id="location"
              placeholder="location"
              value={editScat.location}
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
              value={editScat.animal}
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
              value={editScat.weight}
              onChange={this.formFieldStringState}
            />
          </div>
          <button
          type="submit"
          className="btn btn-primary"
          >Save Edited Scat</button>
        </form>
      </div>
    );
  }
}

export default EditScat;
