import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import './SinglePage.scss';
import Breadcrumbs from './../components/Breadcrumbs';

const SinglePage = () => {
    const pageTitle = 'サンプルテキストサンプル ルテキストサンプルテキストサンプルテキストサンプル ルテキスト ';

    return (
        <>
            <Breadcrumbs title={pageTitle} />
            <div class="l-container single-body">
                <div className="content-header">
                    <Switch>
                        <Route path="/single">
                            <div className="content-header-item content-header-item-right">
                                <Link className="button-default" to="/single-edit">Edit Post</Link>
                            </div>
                        </Route>
                    </Switch>
                </div>

                <span className="single-date">
                    <time datetime="2019-06-19">2019.06.19</time>
                </span>

                <h1>サンプルテキストサンプル ルテキストサンプルテキ
                ストサンプルテキストサンプル ルテキスト </h1>
            </div>
        </>
    );
}

export default SinglePage;
