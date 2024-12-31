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

  if (props.meaning) {
    return (
      <div className="Meaning">
        <section>
          <h4>{props.meaning.partOfSpeech}</h4>
          <p>{props.meaning.definition}</p>
          {synonym()}
          {example()}
        </section>
      </div>
    );
  } else {
    return (
      <div>
        <section>
          <h4>Looking for the meaning of {props.word}...</h4>
        </section>
      </div>
    );
  }
}
