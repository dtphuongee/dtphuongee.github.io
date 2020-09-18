import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Print from './components/Print';
//import OcSen from './components/OcSen';
import Post from './components/Post'
import CreateStory from './components/CreateStory';



class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Navbar />
             <Switch>
            <Route path ='/new' component={CreateStory} />
            <Route path ='/stories' component = {Post} />
            <Route path = '/print' component = {Print} /> 
          </Switch>
        </BrowserRouter>
        <Post />
      </div>
    )
  }

}

export default App;