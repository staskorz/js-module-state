import React, { Component } from "react"
import "./App.css"

import Link from "./components/Link"
import FirstComponent from "./components/FirstComponent"
import SecondComponent from "./components/SecondComponent"

const FIRST = "FIRST"
const SECOND = "SECOND"

class App extends Component {
  constructor() {
    super()

    this.state = {
      selectedComponent: FIRST,
    }

    this.setSelectedComponent = this.setSelectedComponent.bind(this)
    this.onFirstComponentClick = this.onFirstComponentClick.bind(this)
    this.onSecondComponentClick = this.onSecondComponentClick.bind(this)
  }

  setSelectedComponent(selectedComponent) {
    this.setState({ selectedComponent })
  }

  onFirstComponentClick() {
    this.setSelectedComponent(FIRST)
  }

  onSecondComponentClick() {
    this.setSelectedComponent(SECOND)
  }

  render() {
    const { selectedComponent } = this.state

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          <Link label="First Component" onClick={this.onFirstComponentClick} />

          <Link
            label="Second Component"
            onClick={this.onSecondComponentClick}
          />
        </p>
        {selectedComponent === FIRST ? <FirstComponent /> : null}
        {selectedComponent === SECOND ? <SecondComponent /> : null}
      </div>
    )
  }
}

export default App
