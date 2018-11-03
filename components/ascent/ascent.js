import { h, Component } from "preact";
import Result from "./result";
import GasStrategy from "./gas-strategy";

export default class Ascent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      maxDepth: 0,
      cylinderBarCapacity: 200,
      gasStrategy: GasStrategy.AllAvailable
    };
    this.onDepthChange = this.onDepthChange.bind(this);
    this.onCylinderBarCapacityChange = this.onCylinderBarCapacityChange.bind(
      this
    );
    this.onGasStrategyChange = this.onGasStrategyChange.bind(this);
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

  onCylinderBarCapacityChange(event) {
    let parsedInput = 0;
    try {
      parsedInput = parseInt(event.target.value);
    } catch (e) {
      //Ignore
    }
    this.setState({ cylinderBarCapacity: parsedInput });
  }

  onGasStrategyChange(event) {
    this.setState({ gasStrategy: event.target.value });
  }

  render() {
    return (
      <div style={style.container}>
        <h1>Ascent calculator - EAN32</h1>
        <input
          style={style.input}
          type="number"
          min="0"
          max="40"
          value={this.state.maxDepth}
          placeholder="Max depth metres?"
          onKeyUp={this.onDepthChange}
        />
        <input
          style={style.input}
          type="number"
          min="0"
          max="300"
          value={this.state.cylinderBarCapacity}
          placeholder="Cylinder bar capacity?"
          onKeyUp={this.onCylinderBarCapacityChange}
        />
        <select
          style={style.select}
          value={this.state.gasStrategy}
          onChange={this.onGasStrategyChange}
        >
          <option value={GasStrategy.AllAvailable}>
            {GasStrategy.AllAvailable}
          </option>
          <option value={GasStrategy.RuleOfHalf}>
            {GasStrategy.RuleOfHalf}
          </option>
          <option value={GasStrategy.RuleOfThird}>
            {GasStrategy.RuleOfThird}
          </option>
        </select>
        <Result
          maxDepth={this.state.maxDepth}
          cylinderBarCapacity={this.state.cylinderBarCapacity}
          gasStrategy={this.state.gasStrategy}
        />
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
    minWidth: "80px",
    marginRight: "10px",
    borderRadius: "6px"
  },
  select: {
    fontSize: "18px",
    fontFamily: "Arial",
    border: "1px solid gray",
    marginRight: "10px"
  }
};
