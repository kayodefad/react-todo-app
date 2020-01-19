import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchTodos } from '../../actions'
import './TodoBody.css'

class TodoBody extends React.Component {
  componentDidMount = () => {
    this.props.fetchTodos()
  }

  renderList = () => {
    const style = {
      display: 'flex',
      justifyContent: 'space-between',
      background: '#fff',
      padding: '10px',
      marginBottom: '10px',
      borderRadius: '5px'
    }

    if (!this.props.todos.length) {
      return (
        <div className="text-light text-center">
          NO TODOS...
          {/* <i className="fas fa-frown-open" style={{fontSize: '200px'}}></i> */}
        </div>
      )
    }

    return this.props.todos.map(todo => {
      return (
        <li style={style} key={todo.id} className="list-group-item font-weight-bold">
          {todo.todoitem}{' '}
          <div>
            <Link to={`/todos/edit/${todo.id}`}><i className="far fa-edit mr-3"></i></Link>
            <Link to={`/todos/delete/${todo.id}`}><i className="fas fa-trash-alt"></i></Link>
          </div>
        </li>
      )
    })
  }

  render() {
    return (
      <div>
        <h3 className="mt-3" style={{ color: '#fff', fontSize:"1.3rem" }}>
          UPCOMING
        </h3>
        <ul className="list-group list-group-flush">{this.renderList()}</ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { todos: Object.values(state.todos) }
}

export default connect(mapStateToProps, { fetchTodos })(TodoBody)
