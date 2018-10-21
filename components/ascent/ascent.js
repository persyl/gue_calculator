import { h, Component } from "preact";
import Result from "./result";

export default class Ascent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      maxDepth: 0
    };
    this.onDepthChange = this.onDepthChange.bind(this);
  }

  onDepthChange(event) {
    this.setState({ maxDepth: event.target.value });
  }

  render() {
    return (
      <div>
        <h1>Ascent calculator</h1>
        <input
          type="text"
          value={this.state.maxDepth}
          placeholder="Max depth metres?"
          onChange={this.onDepthChange}
        />
        <Result maxDepth={this.state.maxDepth} />
      </div>
    );
  }
}
