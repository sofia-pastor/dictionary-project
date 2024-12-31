import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="App-header">
          <h1>Dictionary</h1>
        </div>
        <main>
          <Dictionary />
        </main>
        <footer>
          <p>
            This project was coded by{" "}
            <a
              href="https://github.com/sofia-pastor"
              target="_blank"
              rel="noreferrer"
            >
              Sofia Pastor
            </a>{" "}
            and is{" "}
            <a
              href="https://github.com/sofia-pastor/dictionary-project"
              target="_blank"
              rel="noreferrer"
            >
              open-sourced
            </a>
            .
          </p>
        </footer>
      </div>
    </div>
  );
}
