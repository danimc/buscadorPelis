import React, { Component } from "react";

const API_KEY = "98e2e25d";

export class SearchForm extends Component {
  state = {
    inputMovie: "",
  };

  _handleChange = (e) => {
    this.setState({ inputMovie: e.target.value });
  };

  _handleSubmit = (e) => {
    e.preventDefault();
    const { inputMovie } = this.state;

    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${inputMovie}`)
      .then((res) => res.json())
      .then((results) => {
        const { Search, totalResults } = results;
        console.log({Search, totalResults});
        this.props.onResults(Search)
      });
  };

  render() {
    return (
      <form onSubmit={this._handleSubmit}>
        <div className="field has-addons">
          <div className="control">
            <input
              className="input"
              onChange={this._handleChange}
              type="text"
              placeholder="Buscar Pelis"
            />
          </div>
          <div className="control">
            <button className="button is-info">Buscar Pelis</button>
          </div>
        </div>
      </form>
    );
  }
}
