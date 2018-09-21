import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

// COMPONENTS
import Header from './components/layout/Header';
import Posts from './components/posts/Posts';
import PostDetail from './components/posts/Post-comments';
import Albums from './components/albums/Albums';
import Photos from './components/photos/Photos';
import Users from './components/users/Users';
import Index from './components/pages/Index';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';

class App extends Component {
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div>
          <Header />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Index} />
              <Route exact path="/posts" component={Posts} />
              <Route exact path="/posts/:id/comments" component={PostDetail} />
              <Route exact path="/albums" component={Albums} />
              <Route exact path="/albums/:id/photos" component={Photos} />
              <Route exact path="/users" component={Users} />
              <Route exact path="/about" component={About} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
