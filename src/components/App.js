import React, { Component } from 'react';
import { Switch, Route } from 'react-router';
import 'styles/index.scss';

import Nav from './Nav';
import About from './About';
import Landing from './Landing';
import Projects from './Projects';
import ProjectDetail from './ProjectDetail';

// import { Grid } from 'react-flexbox-grid';

class App extends Component {
  render() {
    return (
       <div className="container-fluid">
          <Route path="/(.+)" component={Nav}/>
          <Switch>
              <Route path="/about" component={About}/>
              <Route path="/:projectType/:projectTitle" component={ProjectDetail}/>
              <Route path="/:projectsType" component={Projects}/>
              <Route component={Landing}/>
          </Switch>
      </div>
    );
  }
}

export default App;
