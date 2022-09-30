import { useEffect, useState } from "react";
import { useRoutes, BrowserRouter as Router, Link } from "react-router-dom";
import axios from "axios";

function Topic() {
  const [topicList, setTopicList] = useState([]);


  useEffect( () => {
    (async() => {
      try {
        const res = await axios.get("http://localhost:4000/topic/list");
        setTopicList(res.data);
      } catch (error) {
        console.log(error)
      }
    })()
  }, []);

  return (
    <>
      <h2>주제 리스트</h2>
      <div>{topicList.length > 0 ? topicList.map(topic => {
        return (
          <>
          <div>{topic.title}</div>
          <div>{topic.description}</div>
          <div>{topic.createdAt}</div>
          <div>{topic.hashtags}</div>
          </>
          
        )
      }) : "리스트가 없습니다."}</div>
      <div>
        <Link to="/topic/add">주제 등록</Link>
      </div>
    </>
  )
}

function TopicRegist() {

  const [title,setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [hashtags, setHashtags] = useState("");

  const handleChangeTitle = (event) => {
    const value = event.target.value;
    setTitle(value)
  }

  const handleChangeDescription = (event) => {
    const value = event.target.value;
    setDescription(value)
  }

  const handleChangeHashtags = (event) => {
    const value = event.target.value;
    setHashtags(value)
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const result = await axios.post("http://localhost:4000/topic/add",{
      title,
      description,
      hashtags
    })
    console.log(result)
  }

  return (
    <>
      <h2>주제 등록</h2>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" placeholder="Title" value={title} name="title" onChange={handleChangeTitle} />
        <input type="text" placeholder="Description" name="description" value={description} onChange={handleChangeDescription} />
        <input type="text" placeholder="hashtags" name="hashtags" value={hashtags} onChange={handleChangeHashtags} />
        <input type="submit" value="등록" />
      </form>
    </>
  )
}



function Home() {
  return (
    <>
    <h2>Home</h2>
    <ul>
      <li><Link to={"/topic"}>주제 리스트</Link></li>
    </ul>
    </>
  )
}

function Routes() {
  let config = useRoutes([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/topic",
      element: <Topic />,
    },
    {
      path:"/topic/add",
      element:<TopicRegist/>
    }
    
  ])

  return config;
}

function App() {

  return (
    <>
      <h1>Code Review</h1>
      <Router>
        <Routes />
      </Router>
    </>
  );
}

export default App;
