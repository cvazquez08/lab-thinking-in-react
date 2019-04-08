import React, { Component } from "react";
import "../App.css";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <input
          tpye="text"
          name="query"
          className="search"
          placeholder="Search"
          onChange={e => {
            this.props.handleSearch(e);
          }}
        />
        <br />
        <input
          type="checkbox"
          className="checkbox"
          onChange={e => {
            this.props.handleCheckBox(e);
          }}
        />
        In Stock Only
      </div>
    );
  }
}

export default SearchBar;
