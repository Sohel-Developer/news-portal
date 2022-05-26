import React from "react";
import { useState ,useEffect} from "react";
import { Row } from "react-bootstrap";
import NewsItem from "../NewsItem/NewsItem";

const News = () => {
	const [news,setNews]=useState([]);
		useEffect(()=> {
			fetch('https://newsapi.org/v2/everything?q=tesla&from=2022-04-26&sortBy=publishedAt&apiKey=1600fbd958044e2796fec7c4e4ed491d')
			.then(res=>res.json())
			.then(data=> setNews(data.articles))	
		},[])
	return <div>
		<h1>News : {news.length}</h1>
		<Row xs={1} md={3} className="g-4">
		{
			news.map(n=> <NewsItem 
				key={n.author}
				newsItem={n}
				></NewsItem>)
		}
		</Row>
	</div>
};

export default News;
