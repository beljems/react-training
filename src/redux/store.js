import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'react-thunk'
import reducers from './modules'

const store = createStore(
  reducers,
  applyMiddleware(thunk)
)

export default store
