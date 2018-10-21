import { h, Component } from "preact";

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
    this.calculateMinimumGasBar();
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
    const averageDepthATA = Math.ceil(props.maxDepth / 2) / 10 + 1;
    const scr = 40; //40L/min: to accommodate conservatism, and to account for the increased breathing rate from encountering an issue on the dive.
    this.litersNeeded = this.totalAscentTime * scr * averageDepthATA;
  }

  calculateMinimumGasBar() {
    this.barNeeded = {
      d12: Math.ceil(this.litersNeeded / 24),
      s12: Math.ceil(this.litersNeeded / 12),
      d11: Math.ceil(this.litersNeeded / 22),
      s11: Math.ceil(this.litersNeeded / 11),
      d10: Math.ceil(this.litersNeeded / 20),
      s10: Math.ceil(this.litersNeeded / 10)
    };
  }

  render() {
    if (typeof this.props.maxDepth !== "number" || this.props.maxDepth < 1)
      return null;

    return (
      <div style={style.container}>
        <h2>Ascent time</h2>
        <p style={style.text}>
          From {this.props.maxDepth}m = {this.totalAscentTime} minutes
        </p>
        <h2>Minimum gas enough for {this.amountOfDivers} divers</h2>
        <p style={style.text}>{this.litersNeeded} L total gas.</p>
        <p style={style.text}>Double 12L cylinders: {this.barNeeded.d12} BAR</p>
        <p style={style.text}>Single 12L cylinder: {this.barNeeded.s12} BAR</p>
        <p style={style.text}>Double 11L cylinders: {this.barNeeded.d11} BAR</p>
        <p style={style.text}>Single 11L cylinder: {this.barNeeded.s11} BAR</p>
        <p style={style.text}>Double 10L cylinders: {this.barNeeded.d10} BAR</p>
        <p style={style.text}>Single 10L cylinder: {this.barNeeded.s10} BAR</p>
      </div>
    );
  }
}

const style = {
  container: {
    backgroundColor: "#08689b",
    padding: "10px",
    borderRadius: "10px"
  },
  text: {
    fontSize: "18px",
    fontFamily: "Arial"
  }
};
