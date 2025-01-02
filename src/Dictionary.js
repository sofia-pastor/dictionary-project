import { useState } from "react";
import axios from "axios";

import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary() {
  const [keyword, setKeyword] = useState(null);
  const [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data);
  }

  function search(event) {
    event.preventDefault();

    const apiKey = "tb3fa10906d8aeb018ofce8736864bb2";
    const apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;

    axios.get(apiUrl).then(handleResponse);
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
            className="input-form"
            onChange={handleKeywordInput}
          />
          <input type="submit" value={"Search"} className="form-button" />
        </form>
        <p className="hint">i.e: hello, sun, program,...</p>
      </section>
      <Results results={results} />
    </div>
  );
}
