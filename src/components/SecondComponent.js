import React, { Component } from "react"

import * as inputState from "../state/input"

class SecondComponent extends Component {
  constructor() {
    super()

    this.state = {
      value: inputState.getValue(),
    }

    this.onChange = this.onChange.bind(this)
  }

  componentWillUnmount() {
    inputState.setValue(this.state.value)
  }

  onChange(e) {
    this.setState({
      value: e.target.value,
    })
  }

  render() {
    const { value } = this.state
    const { onChange } = this

    return (
      <div>
        <h2>Second Component</h2>
        <input type="text" value={value} onChange={onChange} />
      </div>
    )
  }
}

export default SecondComponent
