import React from 'react';

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

  render() {
    const { newScat } = this.state;
    return (
      <div className="NewScat">
        <form>
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
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
}

export default NewScat;
