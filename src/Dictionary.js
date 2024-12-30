import { useState } from "react";

export default function Dictionary() {
  const [keyword, setKeyword] = useState(null);

  function handleKeywordInput(event) {
    setKeyword(event.target.value);
  }

  function search(event) {
    event.preventDefault();
    alert(keyword);
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
