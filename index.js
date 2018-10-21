import { h, render, Component } from "preact";
import Ascent from "./components/ascent/ascent";

class GueApp extends Component {
  render() {
    return <Ascent />;
  }
}

render(<GueApp />, document.getElementById("gue-app"));
