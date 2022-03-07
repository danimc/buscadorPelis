import React, { Component } from "react"
import { Routes, Route } from 'react-router-dom'

import "./App.css"
import "bulma/css/bulma.css"
import { Detail } from "./pages/Detail"
import { Home } from "./pages/Home"

class App extends Component {

  render() {
    return (
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="detail/:id" element={<Detail />} />
        </Routes>
      </div>
    );
  }
}

export default App
