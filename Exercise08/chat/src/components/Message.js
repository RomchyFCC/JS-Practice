import React from 'react';
import PropTypes from 'prop-types'

const Message = ({message, author}) => (
  <p>
    <i>{author}</i>: {message}
  </p>
)

Message.PropTypes = {
  message: PropTypes.func.isRequired,
  author: PropTypes.func.isRequired
}

export default Message