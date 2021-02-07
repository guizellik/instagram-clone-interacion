import React from "react";
import './App.css';
import { store } from './store/index'
import { Provider } from 'react-redux'
import Form from './components/Form'
import PostList from './components/PostList'
import Stories from './components/Stories'
import Header from './components/Header'
import UserInfo from './components/UserInfo'

function App() {
  return (
      <Provider store={store}>
        <Header />
        <div className="home">
          <div className="post-container">
            <Form />
            <PostList />
          </div>
          <div>
            <UserInfo />
            <Stories />
          </div>
        </div>
      </Provider>
  );
}

export default App;
