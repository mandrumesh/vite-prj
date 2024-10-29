import React from 'react'

const Alert = (props) => {

  const alertTypeText = () => {
    switch (props.alert.type) {
      case 'success':
        return 'Success!';
      case 'warning':
        return 'Warning!';
      case 'error':
      default:
        return 'Failed!';
    }
  };

  return (
    props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show alert-message`} role="alert">
      <strong>{alertTypeText()}</strong> {props.alert.message}
      {/* <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
    </div>
  )
}

export default Alert
