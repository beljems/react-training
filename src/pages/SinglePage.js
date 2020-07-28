import React from 'react';

import './SinglePage.scss';
import Breadcrumbs from './../components/Breadcrumbs';
import ContentHeader from './../components/ContentHeader';
import Comment from './../components/Comment';

import contentFeature from './../assets/images/content-feature.jpg';

const SinglePage = () => {
  const pageTitle = 'サンプルテキストサンプル ルテキストサンプルテキストサンプルテキストサンプル ルテキスト ';

  return (
    <>
      <Breadcrumbs title={pageTitle} />
      <div className="l-container single-body">
        <ContentHeader />

        <span className="single-date">
          <time dateTime="2019-06-19">2019.06.19</time>
        </span>

        <h1>サンプルテキストサンプル ルテキストサンプルテキ
        ストサンプルテキストサンプル ルテキスト </h1>

        <div className="single-feature-image" style={{ backgroundImage: `url(${contentFeature})` }}></div>

        <p>ここにはテキストが入ります。ここにはテキストが入りますここにはテキストが入りますここにはテキストが入りますここにはテキストが入ります。ここにはテキストが入ります。ここにはテキストが入りますここにはテキストが入りますここにはテキストが入りますここにはテキストが入ります。ここにはテキストが入ります。ここにはテキストが入りますここにはテキストが入りますここにはテキストが入りますここにはテキストが入ります。</p>
        <p>ここにはテキストが入ります。ここにはテキストが入りますここにはテキストが入りますここにはテキストが入りますここにはテキストが入ります。ここにはテキストが入ります。ここにはテキストが入りますここにはテキストが入りますここにはテキストが入りますここにはテキストが入ります。ここにはテキストが入ります。ここにはテキストが入りますここにはテキストが入りますここにはテキストが入りますここにはテキストが入ります。</p>
     </div>
     <Comment />
    </>
  );
}

export default SinglePage;
