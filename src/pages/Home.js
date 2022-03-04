import React, { Component } from "react"
import {Title} from '../components/Title'
import {SearchForm} from '../components/SearchForm'
import {MovieList} from '../components/MoviesList'


export class Home extends Component {

    state = { usedSearch: false, results: [] };

    _handleResults = (results) => {
      this.setState({ results, usedSearch: true })
    }
  
    _renderResults() {
      return this.state.results.length === 0
        ? <p>Sin Resultados</p>
        : <MovieList movies={this.state.results} />
    }
  

    render() {
        return (
            <div>
                <Title>Buscador de Pelis</Title><div className="SearchForm-wrapper">
                    <SearchForm onResults={this._handleResults} />
                </div>
                {
                    this.state.usedSearch
                        ? this._renderResults()
                        : <small>Utiliza el formulario para buscar una peli ;) </small>
                }
            </div>
    
        )
    }
}

