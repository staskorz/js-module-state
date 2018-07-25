import React, { Component } from "react"
import PropTypes from "prop-types"

class Link extends Component {
  constructor() {
    super()

    this.onClick = this.onClick.bind(this)
  }

  onClick(e) {
    e.preventDefault()

    this.props.onClick()
  }

  render() {
    const { label } = this.props

    return (
      <a href={label} onClick={this.onClick}>
        {label}
      </a>
    )
  }
}

Link.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default Link
