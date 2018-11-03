import { h, Component } from "preact";
import GasStrategy from "./gas-strategy";
import GlobalStyles from "../typography/typography";

export default class Result extends Component {
  constructor(props) {
    super(props);
    this.totalAscentTime = 0;
    this.litersNeeded = 0;
    this.amountOfDivers = 2; //Always count total time for 2 divers
    this.calculate(props);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return !isNaN(nextProps.maxDepth);
  }

  componentWillUpdate(nextProps, nextState) {
    this.calculate(nextProps);
  }

  calculate(props) {
    this.calculateAscentTime(props);
    this.calculateMinimumGasLiters(props);
    this.calculateGas(props);
  }

  calculateAscentTime(props) {
    const { maxDepth } = props;
    const minutesToHandleProblems = 1;
    if (maxDepth <= 3) {
      this.totalAscentTime =
        (minutesToHandleProblems + 1) * this.amountOfDivers;
      return;
    }

    if (maxDepth <= 6) {
      this.totalAscentTime =
        (minutesToHandleProblems + 2) * this.amountOfDivers;
      return;
    }

    if (maxDepth <= 12) {
      this.totalAscentTime =
        (minutesToHandleProblems + 3) * this.amountOfDivers;
      return;
    }

    if (maxDepth <= 15) {
      this.totalAscentTime =
        (minutesToHandleProblems + 4) * this.amountOfDivers;
      return;
    }

    if (maxDepth > 15) {
      const metresUpTo15 = maxDepth - 15;
      const timeTo15 = Math.ceil(metresUpTo15 / 9); // 9metres / min up to 15m level
      this.totalAscentTime =
        (minutesToHandleProblems + timeTo15 + 4) * this.amountOfDivers; //4min extra for 15m-12m, 12m-6m, 6m-3m, 3m-surface
      return;
    }
  }

  calculateMinimumGasLiters(props) {
    const averageDepthATA = Math.floor(props.maxDepth / 2) / 10 + 1;
    const scr = 40; //40L/min: to accommodate conservatism, and to account for the increased breathing rate from encountering an issue on the dive.
    this.litersNeeded = this.totalAscentTime * scr * averageDepthATA;
  }

  calculateGas(props) {
    const d12 = this.getMinBar(24);
    const s12 = this.getMinBar(12);
    const d11 = this.getMinBar(22);
    const s11 = this.getMinBar(11);
    const d10 = this.getMinBar(20);
    const s10 = this.getMinBar(10);

    this.minimumBarNeeded = {
      d12: {
        minBar: d12,
        usableGas: this.getUsableBar(props, d12)
      },
      s12: {
        minBar: s12,
        usableGas: this.getUsableBar(props, s12)
      },
      d11: {
        minBar: d11,
        usableGas: this.getUsableBar(props, d11)
      },
      s11: {
        minBar: s11,
        usableGas: this.getUsableBar(props, s11)
      },
      d10: {
        minBar: d10,
        usableGas: this.getUsableBar(props, d10)
      },
      s10: {
        minBar: s10,
        usableGas: this.getUsableBar(props, s10)
      }
    };
  }

  getMinBar(cylinderLitres) {
    const minimumBars = Math.floor(this.litersNeeded / cylinderLitres);
    return minimumBars > 40 ? minimumBars : 40; //Minimum Gas can NEVER be less than 40 BAR due to the possible SPG inaccuracy at the lower ranges
  }

  getUsableBar(props, minBar) {
    const ug = props.cylinderBarCapacity - minBar;
    return ug > minBar ? ug : 0;
  }

  render() {
    if (
      typeof this.props.maxDepth !== "number" ||
      this.props.maxDepth < 1 ||
      typeof this.props.cylinderBarCapacity !== "number" ||
      this.props.cylinderBarCapacity < 1
    )
      return null;

    return (
      <div style={style.container}>
        <p style={GlobalStyles.text}>
          Ascent time from&nbsp;
          <strong>
            {this.props.maxDepth}m = {this.totalAscentTime} minutes
          </strong>
        </p>
        <p style={GlobalStyles.text}>
          <strong>{this.litersNeeded} L</strong> minimum gas needed.
        </p>
        <h2 style={GlobalStyles.h2}>Double 12L cylinders:</h2>
        {this.renderMinGasText(this.minimumBarNeeded.d12.minBar)}
        {this.renderUsableGasText(this.minimumBarNeeded.d12.usableGas)}

        <h2 style={GlobalStyles.h2}>Single 12L cylinder:</h2>
        {this.renderMinGasText(this.minimumBarNeeded.s12.minBar)}
        {this.renderUsableGasText(this.minimumBarNeeded.s12.usableGas)}

        <h2 style={GlobalStyles.h2}>Double 11L cylinders:</h2>
        {this.renderMinGasText(this.minimumBarNeeded.d11.minBar)}
        {this.renderUsableGasText(this.minimumBarNeeded.d11.usableGas)}

        <h2 style={GlobalStyles.h2}>Single 11L cylinder:</h2>
        {this.renderMinGasText(this.minimumBarNeeded.s11.minBar)}
        {this.renderUsableGasText(this.minimumBarNeeded.s11.usableGas)}

        <h2 style={GlobalStyles.h2}>Double 10L cylinders:</h2>
        {this.renderMinGasText(this.minimumBarNeeded.d10.minBar)}
        {this.renderUsableGasText(this.minimumBarNeeded.d10.usableGas)}

        <h2 style={GlobalStyles.h2}>Single 10L cylinder:</h2>
        {this.renderMinGasText(this.minimumBarNeeded.s10.minBar)}
        {this.renderUsableGasText(this.minimumBarNeeded.s10.usableGas)}
      </div>
    );
  }

  renderMinGasText(minBarValue) {
    return (
      <p style={GlobalStyles.text}>
        Minimum gas (for {this.amountOfDivers} divers):&nbsp;
        <strong>{minBarValue} BAR</strong>
      </p>
    );
  }

  renderUsableGasText(usableGasValue) {
    if (this.props.gasStrategy === GasStrategy.AllAvailable) {
      return (
        <p style={GlobalStyles.text}>
          Usable gas ({this.props.gasStrategy}
          ):&nbsp;
          <strong>{usableGasValue} BAR</strong>
        </p>
      );
    }
    if (this.props.gasStrategy === GasStrategy.RuleOfHalf) {
      const modifiedUsableGas = Math.floor(usableGasValue / 2);
      const turnPressure = this.props.cylinderBarCapacity - modifiedUsableGas;
      return (
        <p style={GlobalStyles.text}>
          Usable gas ({this.props.gasStrategy}
          ):&nbsp;
          <strong>{usableGasValue} BAR</strong>
          <br />
          Turn pressure: {turnPressure}
        </p>
      );
    }
    if (this.props.gasStrategy === GasStrategy.RuleOfThird) {
      const modifiedUsableGas = Math.floor(usableGasValue / 3);
      const turnPressure = this.props.cylinderBarCapacity - modifiedUsableGas;
      return (
        <p style={GlobalStyles.text}>
          Usable gas ({this.props.gasStrategy}
          ):&nbsp;
          <strong>{usableGasValue} BAR</strong>
          <br />
          Turn pressure: {turnPressure}
          <br />
          Emergency gas: {modifiedUsableGas}
        </p>
      );
    }
    return null;
  }
}

const style = {
  container: {
    backgroundColor: "#08689b",
    padding: "10px",
    borderRadius: "10px"
  }
};
