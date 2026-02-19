import "./App.css";
import { Application } from "./components/application";
import { Skills } from "./components/skills/skills";
import { skills } from "./data";

function App() {
  return (
    <>
      <Application />
      <Skills skills={skills} />
      <footer>Footer App Component</footer>
    </>
  );
}

export default App;
