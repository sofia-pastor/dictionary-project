import { useState } from "react";

export default function Meaning(props) {
  console.log(props.meaning);
  function example() {
    let example = props.meaning.example;
    if (example) {
      return (
        <p className="example">
          <em>example: {props.meaning.example}</em>
        </p>
      );
    } else return null;
  }

  function synonym() {
    let synonyms = props.meaning.synonyms;
    if (synonyms) {
      return (
        <p>
          <em>synonym: {synonyms}</em>
        </p>
      );
    } else return null;
  }

  const [meaningData, setMeaningData] = useState({ ready: false });
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      <p>{props.meaning.definition}</p>
      {synonym()}
      {example()}
    </div>
  );
}
