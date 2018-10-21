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
    let parsedInput = 0;
    try {
      parsedInput = parseInt(event.target.value);
    } catch (e) {
      //Ignore
    }
    this.setState({ maxDepth: parsedInput });
  }

  render() {
    return (
      <div style={style.container}>
        <h1>Ascent calculator</h1>
        <input
          style={style.input}
          type="number"
          min="0"
          max="40"
          value={this.state.maxDepth}
          placeholder="Max depth metres?"
          onKeyUp={this.onDepthChange}
        />
        <Result maxDepth={this.state.maxDepth} />
      </div>
    );
  }
}

const style = {
  container: {
    backgroundColor: "#08689b",
    color: "white",
    padding: "10px",
    borderRadius: "10px"
  },
  input: {
    fontSize: "18px",
    fontFamily: "Arial",
    padding: "4px",
    border: "1px solid gray",
    minWidth: "80px"
  }
};
