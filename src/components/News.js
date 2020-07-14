import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './News.scss';

import ContentHeader from './../components/ContentHeader';
import Article from './../components/Article';

import articleImage from './../assets/images/article-img.jpg';

const News = () => {
    const [articleItems, setArticleItems] = useState(6);
    const articleData = [];

    const handleClick = () => setArticleItems(articleItems + 6);
    const totalArticles = () => articles.length === articleData.length;

    const article = {
        image: articleImage,
        time: '2019.06.19',
        desc: 'サンプルテキストサンプル ルテキストサンプルテキストサンプルテキストサンプル ルテキスト'
    }

    for(let i=1; i<=14; i++) {
        articleData.push(
            <Article
                image={article.image}
                time={article.time}
                desc={article.desc}
                link={`/article-${i}`}
            />
        )
    }

    const articles = articleData.slice(0, articleItems).map(item => (
        <li key={item} className="news-item">{item}</li>
    ));

    return (
        <section className="news">
            <div className="l-container">
                <div className="news-header">
                    <h2 className="heading news-heading">News</h2>
                    <ContentHeader />
                </div>

                <ul className="news-list">
                    {articles}
                </ul>

                {(!totalArticles()) &&
                <div className="news-button">
                    <Link className="button" to="" onClick={() => handleClick()}>
                        Load More
                    </Link>
                </div>}

            </div>
        </section>
    );
}

export default News;
