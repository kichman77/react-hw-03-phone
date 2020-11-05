import React, { Component } from 'react';
import './Filter.css';
import PropTypes from 'prop-types';

class Filter extends Component {
  render() {
    // console.log(this.props);
    return (
      <label className="filterLable">
        Finde contacts by name
        <input
          className="filterInput"
          name="filter"
          onChange={this.props.onHandleChange}
          value={this.props.filter}
        />
      </label>
    );
  }
}

export default Filter;

Filter.propTypes = {
  onHandleChange: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired
};