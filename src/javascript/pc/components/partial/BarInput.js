import React from 'react'
import PropTypes from 'prop-types'

class BarInput extends React.Component {
  render() {
    return (
      <input
        type='text'
        placeholder={this.props.placeholder}
        onChange={e => this.props.handleChangeBar(e.target.value)}
      />
    )
  }
}

BarInput.defaultProps = {
  placeholder: 'default placeholder'
}

// https://facebook.github.io/react/docs/typechecking-with-proptypes.html
BarInput.propTypes = {
  placeholder: PropTypes.string,
  handleChangeBar: PropTypes.func.isRequired
}

export default BarInput
