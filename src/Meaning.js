export default function Meaning(props) {
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
    if (props.meaning.synonyms) {
      return (
        <div>
          <p>Synonyms:</p>
          <ul>
            {props.meaning.synonyms.map(function (synonym, index) {
              return <li key={index}>{synonym}</li>;
            })}
          </ul>
        </div>
      );
    } else return null;
  }

  console.log(props.meaning);

  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      <p>{props.meaning.definition}</p>
      {synonym()}
      {example()}
    </div>
  );
}
