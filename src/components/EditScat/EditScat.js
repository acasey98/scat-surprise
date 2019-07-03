import React from 'react';

class EditScat extends React.Component {
  render() {
    const editId = this.props.match.params.id;
    return (
      <div className="EditScat">
        <h2>Scat Surprise</h2>
        <h1>EditId is { editId }</h1>
      </div>
    );
  }
}

export default EditScat;
