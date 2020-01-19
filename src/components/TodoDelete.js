import React from 'react'
import Modal from '../Modal'
import { deleteTodo, fetchTodo } from '../actions'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import history from '../history'
import TodoForm from './TodoForm'
import TodoBody from './TodoBody/TodoBody'

class TodoDelete extends React.Component {
  componentDidMount() {
    this.props.fetchTodo(this.props.match.params.id)
  }

  renderActions = () => {
    const { id } = this.props.match.params

    return (
      <React.Fragment>
        <Link to="/" className="btn btn-success">
          No
        </Link>
        <button
          onClick={() => this.props.deleteTodo(id)}
          className="btn btn-danger"
        >
          Yes
        </button>
      </React.Fragment>
    )
  }

  render() {
    if (!this.props.todo) {
      return <div>Loading...</div>
    }

    return (
      <div>
        <TodoForm onSubmit={this.onSubmit} button="AddTodo" bgColor="#1b6368" />
        <TodoBody />
        <Modal
          title="Delete Task"
          content="Are you sure you want to delete this task?"
          actions={this.renderActions()}
          onDismiss={() => history.push('/')}
        />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return { todo: state.todos[ownProps.match.params.id] }
}

export default connect(mapStateToProps, { fetchTodo, deleteTodo })(TodoDelete)
