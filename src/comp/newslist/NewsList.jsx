import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./newslist.css";
import AuthorsImage from "../../assets/Authors.png";

const Newslist = () => {
  const [posts, setPosts] = useState([]);

  const images = [
    "https://picsum.photos/200/300?random=1",
    "https://picsum.photos/200/300?random=2",
    "https://picsum.photos/200/300?random=3",
    "https://picsum.photos/200/300?random=4",
    "https://picsum.photos/200/300?random=5",
    "https://picsum.photos/200/300?random=6",
    "https://picsum.photos/200/300?random=7",
    "https://picsum.photos/200/300?random=8",
    "https://picsum.photos/200/300?random=9",
    "https://picsum.photos/200/300?random=10",
  ];

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        setPosts(data.slice(0, 10));
      })
      .catch((error) => console.error("Error fetching posts:", error));
  }, []);

  return (
    <div className="newslist">
      {posts.map((post, index) => (
        <div key={post.id}>
          <div className="post">
            <div>
              <div className="infoTop">
                <img src={AuthorsImage} alt="Author" className="authorsImage" />
                <span>Author Name · 7 July</span>
              </div>
              <div className="infoPost">
                <h3>{post.title}</h3>
                <p>{post.body.substring(0, 500)}...</p>
              </div>
              <Link to={`/post/${post.id}`}>
                <button>JavaScript</button>
              </Link>
              <span>12 min read · Selected for you</span>
            </div>
            <div>
              <img
                src={images[index]}
                alt={`Post Thumbnail ${post.id}`}
                className="authorsImage01"
              />
            </div>
          </div>
          <hr className="line" />
        </div>
      ))}
    </div>
  );
};

export default Newslist;
