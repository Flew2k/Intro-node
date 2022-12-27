import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import RecipeReviewCard from "./Card";
import axios from "axios";
function App() {
  const [posts, setPosts] = useState();

  useEffect(() => {
    axios.get("http://localhost:8000/posts").then((data) => {
      setPosts(data.data.posts);
    });
  }, []);

  return (
    <div className="App">
      {posts &&
        posts.map((item, index) => {
          return (
            <RecipeReviewCard
              banner={item.banner}
              title={item.title}
              desc={item.description}
              image={item.authorImage}
              name={item.authorName}
              key={index}
            />
          );
        })}
    </div>
  );
}

export default App;
