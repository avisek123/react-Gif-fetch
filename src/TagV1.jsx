import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "@material-ui/core/Button";

import "./styles.css";

const TagV1 = () => {
  const [tag, setTag] = useState("dogs");
  const [gif, setGif] = useState("");
  //const API_KEY = process.env.REACT_APP_API_KEY;
  const fetchGif = async (tag) => {
    const url = `https://api.giphy.com/v1/gifs/random?api_key=QWe9hkx8WHoiGYHnbGxRMNGyOEpJG0b2&tag=${tag}`;

    const { data } = await axios.get(url); // promise
    //console.log(data);
    const imgSrc = data.data.images.downsized_large.url;
    //console.log(imgSrc);
    setGif(imgSrc);
  };
  useEffect(() => {
    fetchGif(tag);
  }, []);
  const handleClick = () => {
    fetchGif(tag);
  };
  return (
    <div className="container">
      <h1>Random {tag} Gif</h1>
      <img src={gif} alt="gif" width="300" />
      <input value={tag} onChange={(e) => setTag(e.target.value)} />
      <br />
      <Button variant="contained" color="primary" onClick={handleClick}>
        Get another
      </Button>
      <p>with ❤️ Avisek Sahoo</p>
    </div>
  );
};
export default TagV1;
