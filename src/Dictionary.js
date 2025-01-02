import { useState } from "react";
import axios from "axios";

import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary() {
  const [keyword, setKeyword] = useState(null);
  const [results, setResults] = useState(null);
  const [photos, setPhotos] = useState(null);

  function handleResponse(response) {
    setResults(response.data);
  }

  function search(event) {
    event.preventDefault();

    const apiKey = "tb3fa10906d8aeb018ofce8736864bb2";
    const apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;

    axios.get(apiUrl).then(handleResponse);
    getImg();
  }

  function handleImgResponse(response) {
    setPhotos(response.data.results);
  }

  function getImg() {
    const imgApiKey = "MWykxzB0Qh71p7qxFsQcD8VqEJVRZGezR14417o4RPM";
    const imgApiUrl = `https://api.unsplash.com/search/photos?query=${keyword}&client_id=${imgApiKey}`;

    axios.get(imgApiUrl).then(handleImgResponse);
  }

  function handleKeywordInput(event) {
    setKeyword(event.target.value);
  }
  return (
    <div className="Dictionary">
      <section>
        <h2>What word do you want to look up?</h2>
        <form onSubmit={search}>
          <input
            type="search"
            autoFocus
            placeholder="i.e: hello, sun, program,..."
            className="input-form"
            onChange={handleKeywordInput}
          />

          <input type="submit" value={"Search"} className="form-button" />
        </form>
      </section>
      <Results results={results} />
      <Photos photos={photos} />
    </div>
  );
}
