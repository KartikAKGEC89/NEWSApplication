import React, { useState, useEffect } from "react";
import { Card, Button } from "antd";
import axios from "axios";

const { Meta } = Card;

function Auto() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const loadNews = async () => {
      const response = await axios.get(
        "https://newsapi.org/v2/top-headlines?country=in&apiKey=d48d3642086947ca81086c2671881cd5"
      );
      setNews(response.data.articles);
    };
    loadNews();
  }, []);

  console.log("news", news);

  return (
    <div className="App">
    
      {news &&
        news.map((item, index) => {
          return (
            <Card
              key={index}
              hoverable
              style={{ width: "90vw", margin: "5vw" }}
              cover={<img alt="News Banner" src={item.urlToImage} />}
            >
              <Meta title={item.title} description={item.content} />
              <a href={item.url} target="_blank" rel="noopener noreferrer">
                <Button type="primary" style={{ marginTop: "10px" }}>
                  Read More
                </Button>
              </a>
            </Card>
          );
        })}
    </div>
  );
}

export default Auto;