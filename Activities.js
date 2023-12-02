// Activities.js
import React, { Component } from 'react';

class Activities extends Component {
  constructor() {
    super();
    this.state = {
      items: [],
      newItem: '',
    };
  }

  // Implement methods for adding, removing, and updating items as needed.

  render() {
    return (
      <div>
        <h2>Activities</h2>
        {/* Render the list of activities */}
        <ul>
          {this.state.items.map((activity, index) => (
            <li key={index}>{activity}</li>
          ))}
        </ul>
        {/* Add input field and buttons to add new activities */}
        <input
          type="text"
          value={this.state.newItem}
          onChange={this.handleInputChange}
        />
        <button onClick={this.addActivity}>Add Activity</button>
        <button onClick={this.clearActivities}>Clear All</button>
      </div>
    );
  }
}

export default Activities;
