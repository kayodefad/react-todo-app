import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import TodoBody from './TodoBody/TodoBody'
import { Link } from 'react-router-dom'

class TodoList extends React.Component {
  onSubmit = formValues => {
    this.props.addTodo(formValues)
  }

  render() {
    return (
      <div>
        <TodoBody />
        <Link to='/todos/create' className="btn btn-secondary d-inline-block mt-5 font-weight-bold" style={{ backgroundColor: '#fff', color: '#103f42' }}>Add Task</Link>
      </div>
    )
  }
}

export default connect(null, { addTodo })(TodoList)
