import React from 'react';
import { Link } from 'react-router-dom';

import './Breadcrumbs.scss';

const Breadcrumbs = ( props ) => {
    const element = <li className="breadcrumbs-item breadcrumbs-item-current">
        {props.title}
    </li>;

    const breadcrumbsItem = (props.title !== '' && element);

    return (
        <div className="breadcrumbs">
            <div className="l-container">
                <ul className="breadcrumbs-list">
                    <li className="breadcrumbs-item">
                        <Link className="breadcrumbs-link" to="/">Home</Link>
                    </li>
                    {breadcrumbsItem}
                </ul>
            </div>
        </div>
    );
}

export default Breadcrumbs;
