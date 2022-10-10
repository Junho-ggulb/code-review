import { useState } from "react";
import { useRoutes, BrowserRouter as Router } from "react-router-dom";
import axios from "axios";
import Home from "./routes/Home";
import "./css/styles.css";

function TopicRegist() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [hashtags, setHashtags] = useState("");

  const handleChangeTitle = (event) => {
    const value = event.target.value;
    setTitle(value);
  };

  const handleChangeDescription = (event) => {
    const value = event.target.value;
    setDescription(value);
  };

  const handleChangeHashtags = (event) => {
    const value = event.target.value;
    setHashtags(value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const result = await axios.post("http://localhost:4000/topic/add", {
      title,
      description,
      hashtags,
    });
    console.log(result);
  };

  return (
    <>
      <h2>주제 등록</h2>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          name="title"
          onChange={handleChangeTitle}
        />
        <input
          type="text"
          placeholder="Description"
          name="description"
          value={description}
          onChange={handleChangeDescription}
        />
        <input
          type="text"
          placeholder="hashtags"
          name="hashtags"
          value={hashtags}
          onChange={handleChangeHashtags}
        />
        <input type="submit" value="등록" />
      </form>
    </>
  );
}

function Routes() {
  let config = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/topic/add",
      element: <TopicRegist />,
    },
  ]);

  return config;
}

function App() {
  return (
    <Router>
      <Routes />
    </Router>
  );
}

export default App;
