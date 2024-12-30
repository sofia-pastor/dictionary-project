import { useState } from "react";
import axios from "axios";

export default function Dictionary() {
  const [keyword, setKeyword] = useState(null);

  function handleResponse(response) {
    console.log(response);
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
      <form onSubmit={search}>
        <input type="search" autoFocus onChange={handleKeywordInput} />
        <input type="submit" />
      </form>
    </div>
  );
}
