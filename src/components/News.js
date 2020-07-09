import React, { useState } from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import './News.scss';

import Article from './../components/Article';

import articleImage from './../assets/images/article-img.jpg';

const News = () => {
    const [articleItems, setArticleItems] = useState(6);
    const articleData = [];
    let button = '';

    const handleClick = () => {
        setArticleItems(articleItems + 6);
    }

    const totalArticles = () => {
        return articles.length === articleData.length;
    }

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

    const articles = (
        articleData.slice(0, articleItems).map(i => (
            <li key={i} className="news-item">{i}</li>
        ))
    )

    if(!totalArticles()) {
        button = (
            <div className="news-button">
                <Link className="button" to="" onClick={() => handleClick()}>
                    Load More
                </Link>
            </div>
        )
    }

    return (
        <section className="news">
            <div className="l-container">
                <div className="content-header">
                    <Switch>
                        <div className="content-header-item">
                            <h2 className="heading">News</h2>
                        </div>
                        <Route path="/admin">
                            <div className="content-header-item content-header-item-right">
                                <Link className="button-default" to="/admin/">Create New Post</Link>
                            </div>
                        </Route>
                    </Switch>
                </div>

                <ul className="news-list">
                    {articles}
                </ul>

                {button}

            </div>
        </section>
    );
}

export default News;
