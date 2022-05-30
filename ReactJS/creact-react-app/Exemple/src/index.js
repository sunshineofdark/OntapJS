import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Header from './Header';
import reportWebVitals from './reportWebVitals';
import LifeCycle from './LifeCycle';
import Stateless from './Stateless';
import PureComponent from './PureComponent';
import ChangeCount from './ChangeCount'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Header favcol="black" />
    <App></App>
    <LifeCycle favcol="red" /> */}
    {/* <Stateless name='Hoangf' />
    <Stateless name={this.state.name} /> */}
    {/* <Stateless /> */}
    {/* <PureComponent /> */}
    <ChangeCount />

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
