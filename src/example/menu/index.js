import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './index.css';

import Nav from '../nav/index';
import List from '../list/index';
import ListGroup from '../list-group/index';
import avatar from '../avatar/index';
import Layout from '../layout/index';
import noticeBar from "../notice-bar/index";

//made in huangjunquan
import Tab from '../tab/index';

const App = () => (
  <div className="demo">
    <h2>
      <span className="logo">DMUI</span>-react-moblie
    </h2>
    <h3>基于creat-react-app的移动端ui组件库</h3>

    <HashRouter>
      <Switch>
        <Route exact path="/" component={Nav} />
        <Route path="/list" component={List} />
        <Route path="/list-group" component={ListGroup} />
        <Route path="/avatar" component={avatar} />
        <Route path="/layout" component={Layout} />
        <Route path="/noticeBar" component={noticeBar} />

        <Route path="/tab" component={Tab} />

      </Switch>
    </HashRouter>
  </div>
);

export default App;
