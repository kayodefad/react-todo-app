import React from 'react'
import Modal from '../Modal'
import { addTodo, fetchTodo } from '../actions'
import { connect } from 'react-redux'
import history from '../history'
import TodoForm from './TodoForm'
import TodoBody from './TodoBody/TodoBody'

class TodoCreate extends React.Component {
  onSubmit = (formValues) => {
    this.props.addTodo(formValues)
  }

  render() {
    return (
      <div>
        <TodoBody />
        <Modal
          title="Create Task"
          content={<TodoForm onSubmit={this.onSubmit} button="Add Task" bgColor="#1b6368" />}
          onDismiss={() => history.push('/')}
        />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return { todo: state.todos[ownProps.match.params.id] }
}

export default connect(mapStateToProps, { fetchTodo, addTodo })(TodoCreate)
