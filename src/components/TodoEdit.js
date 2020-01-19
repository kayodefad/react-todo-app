import _ from 'lodash'
import React from 'react'
import { editTodo, fetchTodo } from '../actions'
import { connect } from 'react-redux'
import TodoForm from './TodoForm'
import TodoBody from './TodoBody/TodoBody'
import Modal from '../Modal'
import history from '../history'

class TodoEdit extends React.Component {
  componentDidMount() {
    console.log('Edit Component Mounts')
    this.props.fetchTodo(this.props.match.params.id)
  }

  onSubmit = (formValues) => {
    this.props.editTodo(this.props.match.params.id, formValues)
  }

  render() {
    if (!this.props.todo) {
      return <div>Loading...</div>
    }

    return (
      <div>
        <TodoBody />
        <Modal
          title="Edit Task"
          content={<TodoForm initialValues={_.pick(this.props.todo, 'todoitem')} onSubmit={this.onSubmit} button="UpdateTask" bgColor="#23815d" />}
          onDismiss={() => history.push('/')}
        />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return { todo: state.todos[ownProps.match.params.id] }
}

export default connect(mapStateToProps, { fetchTodo, editTodo })(TodoEdit)
