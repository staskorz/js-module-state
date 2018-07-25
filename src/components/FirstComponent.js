import React, { Component } from "react"

class FirstComponent extends Component {
  constructor() {
    super()

    this.state = {
      value: "",
    }

    this.onChange = this.onChange.bind(this)
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
        <h2>First Component</h2>
        <input type="text" value={value} onChange={onChange} />
      </div>
    )
  }
}

export default FirstComponent
