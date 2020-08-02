import React from 'react';

import './SinglePage.scss';
import './SingleEditPage.scss';
import './NewPostPage.scss';

import Breadcrumbs from './../components/Breadcrumbs';
import ContentHeader from './../components/ContentHeader';

const NewPostPage = () => {
  const contentFeature = '';
  const pageTitle = 'サンプルテキストサンプル ルテキストサンプルテキストサンプルテキストサンプル ルテキスト ';

  return (
    <>
      <Breadcrumbs title={pageTitle} />
      <div className="l-container single-body single-body-new">
        <ContentHeader />

        <span className="single-date">
          <time dateTime="2019-06-19">2019.06.19</time>
        </span>

        <textarea className="single-edit-textarea single-edit-heading" placeholder="Title"></textarea>

        <div className="single-feature-image single-edit-feature-image" style={{ backgroundImage: `url(${contentFeature})` }}>
          <div className="single-edit-feature-button">
            <button className="button">Upload Image</button>
          </div>
        </div>

        <textarea className="single-edit-textarea single-edit-copy" placeholder="Content"></textarea>
     </div>
    </>
  );
}

export default NewPostPage;
