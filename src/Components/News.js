import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import NewsItems from './NewsItems'
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {

    const [articles, setArticles] = useState([])
    const [Loading, setLoading] = useState(false)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)

    // Capitalize function
    const capitalizeFunc = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const updateNews = async () => {
        props.setProgress(0);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pagesize=${props.pagesize}`;

        setLoading(true);
        let data = await fetch(url);
        props.setProgress(30);
        let parseData = await data.json();
        props.setProgress(60);

        setArticles(parseData.articles);
        setTotalResults(parseData.totalResults);
        setLoading(false);
        props.setProgress(100);
    }

    // componentDidMount is run after run of render() method
    // asychronize ( async ) function apni body ke ander wait kar sakta hai kuch promises ke resolve hone ka
    useEffect(() => {
        document.title = `NewsLaunch - ${capitalizeFunc(props.category)}`;
        updateNews();
    }, []);

    const fetchMoreData = async () => {
        setPage(page + 1);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pagesize=${props.pagesize}`;
        
        let data = await fetch(url);
        let parseData = await data.json();

        setArticles(articles.concat(parseData.articles))
        setTotalResults(parseData.totalResults)
      };

        return (
            <div className='container my-5'>
                <h1 className="text-center text-danger" style={{marginTop: "90px"}}>NewsLaunch - Top {capitalizeFunc(props.category)} Headlines</h1>
                {/* {Loading && <Spinner />} */}

                <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length !== props.totalResults}
                    loader={<Spinner />}
                >

                   <div className="container">
                    <div className="row my-5">
                            {articles.map((elemt) => {
                                return <div key={elemt.url} className="col-md-4">
                                    <NewsItems title={elemt.title ? elemt.title.slice(0, 45) : ""} description={elemt.description ? elemt.description.slice(0, 80) : ""} imgUrl={elemt.urlToImage} newsUrl={elemt.url} author={elemt.author} date={elemt.publishedAt} />
                                </div>
                            })}
                        </div>
                   </div>

                </InfiniteScroll>

                <hr />
            </div>
        )
    }

// We are include our propsTypes in end of the end of the app in function based component
News.defaultProps = {
    country: "in",
    pagesize: 6,
    category: "general"
}
News.propTypes = {
    country: PropTypes.string,
    pagesize: PropTypes.number,
    category: PropTypes.string
}

export default News
