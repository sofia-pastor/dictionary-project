import Meaning from "./Meaning";
import "./Results.css";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <section>
          <h3 className="text-capitalize">{props.results.word}</h3>
          <h5>&#91;{props.results.phonetic}&#93;</h5>
        </section>
        {props.results.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              {" "}
              <Meaning meaning={meaning} word={props.results.word} />{" "}
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
