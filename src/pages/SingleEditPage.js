import React from 'react';

import './SinglePage.scss';
import './SingleEditPage.scss';

import Breadcrumbs from './../components/Breadcrumbs';
import ContentHeader from './../components/ContentHeader';
import Comment from './../components/Comment';

import contentFeature from './../assets/images/content-feature.jpg';

const SingleEditPage = () => {
    const pageTitle = 'サンプルテキストサンプル ルテキストサンプルテキストサンプルテキストサンプル ルテキスト ';

    return (
        <>
            <Breadcrumbs title={pageTitle} />
            <div className="l-container single-body single-body-edit">
                <ContentHeader />

                <span className="single-date">
                    <time dateTime="2019-06-19">2019.06.19</time>
                </span>

                <textarea className="single-edit-textarea single-edit-heading">
                    サンプルテキストサンプル ルテキストサンプルテキ
                    ストサンプルテキストサンプル ルテキスト
                </textarea>

                <div className="single-feature-image single-edit-feature-image" style={{ backgroundImage: `url(${contentFeature})` }}>
                    <div className="single-edit-feature-button">
                        <button className="button">Upload Image</button>
                    </div>
                </div>

                <textarea className="single-edit-textarea single-edit-copy">
                            ここにはテキストが入ります。ここにはテキストが入りますここにはテキストが入りますここにはテキストが入りますここにはテキストが入ります。ここにはテキストが入ります。ここにはテキストが入りますここにはテキストが入りますここにはテキストが入りますここにはテキストが入ります。ここにはテキストが入ります。ここにはテキストが入りますここにはテキストが入りますここにはテキストが入りますここにはテキストが入ります。
                        ここにはテキストが入ります。ここにはテキストが入りますここにはテキストが入りますここにはテキストが入りますここにはテキストが入ります。ここにはテキストが入ります。ここにはテキストが入りますここにはテキストが入りますここにはテキストが入りますここにはテキストが入ります。ここにはテキストが入ります。ここにはテキストが入りますここにはテキストが入りますここにはテキストが入りますここにはテキストが入ります。

                </textarea>
           </div>
           <Comment />
        </>
    );
}

export default SingleEditPage;
