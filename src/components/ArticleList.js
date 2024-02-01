import React from "react";
import Article from "./Article"; 

const ArticleList = ({ articles }) => {
      // Check if articles is defined and not null
  if (!articles || articles.length === 0) {
    return <p>No articles available</p>;
  }
  return (
    <main>
      {articles.map((article, index) => (
        <Article key={index} {...article} />
      ))}
    </main>
  );
};

export default ArticleList;
