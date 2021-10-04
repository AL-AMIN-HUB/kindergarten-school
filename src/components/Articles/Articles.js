import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Row } from "react-bootstrap";
import Article from "../Article/Article";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    fetch("./articleDb.JSON")
      .then((res) => res.json())
      .then((data) => setArticles(data));
  }, []);
  return (
    <div>
      <div className="text-center">
        <h5 className="custom-text-color">Together We Can Create</h5>
        <h2 style={{ fontSize: "3rem" }}>Interesting Articles Updated Daily</h2>
      </div>
      <div>
        <Row xs={1} sm={1} md={4} className="g-4 w-75 mx-auto my-5">
          {articles.map((article) => (
            <Article key={article.id} article={article}></Article>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Articles;
