import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(
        "https://orangevalleycaa.org/api/videos"
      ).then((response) => response.json());

      setData(result);
    };

    fetchData();
  },[]); // using square bracket to fetch data only when component mounts

  return (
    <div className="App">
      <header>
        <h1>Videos</h1>
      </header>

      {
        data.map(video => (

          <div key={video.id}>
            <h2>
              {video.name}
            </h2>
<div className="thumbnail">
            <img src={video.thumbnail} alt=""></img>
            <p>{video.description}</p>
            </div>            
            <video height={200} controls src={video.video_url}/>
<p>Created By: {video.created_by}</p>
            <p>--------------------------------------------------------</p>
          </div>
       
        ))
      }
    </div>
  );
}

export default App;
