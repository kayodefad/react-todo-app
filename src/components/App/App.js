import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import TodoList from '../TodoList'
import TodoCreate from '../TodoCreate'
import TodoEdit from '../TodoEdit'
import TodoDelete from '../TodoDelete'
import Footer from '../Footer'
import history from '../../history'
import './App.css'

const App = () => {
  return (
    <div className="App">
      <div className="container pt-5">
        <div style={{ maxWidth: '600px', margin: 'auto' }}>
          <Router history={history}>
            <div>
              <h1 className="text-center">TODOAPP</h1>
              <Switch>
                <Route path="/" exact component={TodoList}></Route>
                <Route path="/todos/create" exact component={TodoCreate}></Route>
                <Route path="/todos/edit/:id" exact component={TodoEdit}></Route>
                <Route path="/todos/delete/:id" exact component={TodoDelete}></Route>
              </Switch>
              <Footer />
            </div>
          </Router>
        </div>
      </div>
    </div>
  )
}

export default App
