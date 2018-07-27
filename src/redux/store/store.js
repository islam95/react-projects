import { createStore } from 'redux'
import rootReducer from './rootReducer'

// Create a store with Redux DEV Tools in a browser
const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store
