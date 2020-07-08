import React from 'react';

import Breadcrumbs from './../components/Breadcrumbs';

const SinglePage = () => {
    const pageTitle = 'サンプルテキストサンプル ルテキストサンプルテキストサンプルテキストサンプル ルテキスト ';

    return (
        <>
            <Breadcrumbs title={pageTitle} />
            <div class="l-container single-body">
                Single Page
            </div>
        </>
    );
}

export default SinglePage;
