import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import './ContentHeader.scss';

const ContentHeader = () => {
  const paths = ['/single-edit', '/new-post'];

  return (
    <div className="content-header">
      <Switch>
        {paths.map((path) => (
          <Route key={path} path={path} exact>
            <div className="content-header-item content-header-item-right">
              <div className="content-header-link">
                <Link className="button-default" to="/single">Save Post</Link>
              </div>
              <div className="content-header-link">
                <Link className="button-default" to="/single">Cancel</Link>
              </div>
            </div>
          </Route>
        ))}
        <Route path="/single">
          <div className="content-header-item content-header-item-right">
            <div className="content-header-link">
              <Link className="button-default" to="/single-edit">Edit Post</Link>
            </div>
          </div>
        </Route>
        <Route path="/">
          <div className="content-header-item content-header-item-right">
            <div className="content-header-link">
              <Link className="button-default" to="/new-post">Create New Post</Link>
            </div>
          </div>
        </Route>
      </Switch>
    </div>
  );
}

export default ContentHeader;
