import axios from 'axios'

export default axios.create({
  baseURL: "https://todo-jsonserver.herokuapp.com"
})