import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";

function App() {
  return (
    <div className="App">
      You're on your own from here! Follow the deliverables; test things out in
      the browser as you write your code; and good luck!
      <Header blogName = {blogData.name} />
      <About image={blogData.image} aboutText={blogData.about} />
      <ArticleList articles={blogData.articles} />
    </div>
  );
}

export default App;
