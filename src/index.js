import React from 'react'
import ReactDOM from 'react-dom/client';
import ToDo from './components/ToDo';
import store from './store';
import { Provider } from 'react-redux';

const App = () => {
  return (
    <Provider store={store}><ToDo/></Provider>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <App/>
)
