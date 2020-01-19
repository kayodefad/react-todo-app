import React from 'react'
import { Field, reduxForm } from 'redux-form'

class TodoForm extends React.Component {
  renderInput = ({ input, label, type, meta: { touched, error } }) => {
    return (
      <div className="form-group">
        <input
          className="form-control"
          {...input}
          placeholder={label}
          type={type}
          autoComplete="off"
        />
        {touched && error && (
          <small className="text-danger font-weight-bold font-italic">
            {error}
          </small>
        )}
      </div>
    )
  }

  onSubmit = formValues => {
    this.props.onSubmit(formValues)
    this.props.reset()
  }

  render() {
    const { handleSubmit } = this.props
    return (
      <div>
        <form onSubmit={handleSubmit(this.onSubmit)}>
          <Field
            name="todoitem"
            type="text"
            component={this.renderInput}
            label="Enter Todo"
          ></Field>
          <button
            className="btn"
            style={{ backgroundColor: this.props.bgColor, color: '#fff' }}
          >
            {this.props.button}
          </button>
        </form>
      </div>
    )
  }
}

const validate = formValues => {
  const errors = {}

  if (!formValues.todoitem) {
    errors.todoitem = 'You must enter some todo'
  } else if (formValues.todoitem.length > 27) {
    errors.todoitem = 'Must be 25 characters or less'
  }

  return errors
}

export default reduxForm({ form: 'todoform', validate })(TodoForm)
