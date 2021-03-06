import { h, Component } from "preact";
import Result from "./result";
import GasStrategy from "./gas-strategy";
import GlobalStyles from "../typography/typography";

export default class Ascent extends Component {
  constructor(props) {
    super(props);
    const partialPressure = 1.4;
    this.gasMix = 0.32;
    this.allowedMaxDepth = Math.floor((partialPressure / this.gasMix - 1) * 10);
    this.state = {
      maxDepth: 0,
      tooDeep: false,
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
      parsedInput = 0;
    }
    this.setState({
      maxDepth: parsedInput,
      tooDeep: parsedInput >= this.allowedMaxDepth
    });
  }

  onCylinderBarCapacityChange(event) {
    let parsedInput = 0;
    try {
      parsedInput = parseInt(event.target.value);
    } catch (e) {
      parsedInput = 0;
    }
    this.setState({ cylinderBarCapacity: parsedInput });
  }

  onGasStrategyChange(event) {
    this.setState({ gasStrategy: event.target.value });
  }

  render() {
    return (
      <div style={style.container}>
        <h1 style={GlobalStyles.h1}>GUE dive calculator</h1>
        <h2 style={GlobalStyles.h2}>
          EAN
          {this.gasMix * 100}
        </h2>
        <div style={style.warning}>
          This tool is just meant to be used as a guideline and takes no
          responsibility for your dive. Always make your own personal
          calculations!
        </div>

        <section style={style.fields}>
          <div style={style.inputContainer}>
            <label style={style.label} for="maxdepth">
              Max depth:
            </label>
            <input
              id="maxdepth"
              style={style.input}
              type="number"
              value={this.state.maxDepth}
              onKeyUp={this.onDepthChange}
            />
          </div>

          <div style={style.inputContainer}>
            <label style={style.label} for="capacity">
              Cylinder bar capacity:
            </label>
            <input
              id="capacity"
              style={style.input}
              type="number"
              value={this.state.cylinderBarCapacity}
              onKeyUp={this.onCylinderBarCapacityChange}
            />
          </div>

          <div style={style.inputContainer}>
            <label style={style.label} for="strategy">
              Gas strategy:
            </label>
            <select
              id="strategy"
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
                {GasStrategy.RuleOfThird}*
              </option>
            </select>
          </div>
        </section>

        {this.renderWarning()}
        <Result
          maxDepth={this.state.maxDepth}
          tooDeep={this.state.tooDeep}
          cylinderBarCapacity={this.state.cylinderBarCapacity}
          gasStrategy={this.state.gasStrategy}
        />
      </div>
    );
  }

  renderWarning() {
    const depthWarningText = `WARNING! To deep for EAN${this.gasMix * 100}`;
    const depthWarning =
      this.state.maxDepth >= this.allowedMaxDepth ? (
        <strong>{depthWarningText}</strong>
      ) : null;
    return this.state.gasStrategy === GasStrategy.RuleOfThird ? (
      <div style={style.warning}>
        {depthWarning}* GUE Recreational Level 1 divers should always REFRAIN
        from planning and conducting any dive that requires using the one‐third
        of usable gas strategy
      </div>
    ) : (
      <div style={style.warning}>{depthWarning}</div>
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
  fields: {
    display: "flex",
    justifyContent: "space-between"
  },
  inputContainer: {
    ...GlobalStyles.textSmall,
    border: "1px dotted white",
    borderRadius: "10px",
    padding: "4px",
    marginRight: "4px",
    minHeight: "50px",
    display: "inline-flex",
    flexDirection: "column",
    justifyContent: "space-between",
    flex: 1
  },
  label: {
    paddingBottom: "4px"
  },
  input: {
    ...GlobalStyles.textSmall,
    padding: "4px",
    border: "1px solid gray",
    maxWidth: "48px",
    marginRight: "10px",
    borderRadius: "6px"
  },
  select: {
    ...GlobalStyles.textSmall,
    border: "1px solid gray",
    marginRight: "10px",
    minHeight: "31px"
  },
  warning: {
    ...GlobalStyles.textSmall,
    margin: "10px 0",
    color: "#daf260"
  }
};
