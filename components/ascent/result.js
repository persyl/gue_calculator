import { h } from "preact";

function calculate(maxDepth) {
  const minutesToHandleProblems = 1;
  if (maxDepth <= 3) {
    return minutesToHandleProblems + 1;
  }

  if (maxDepth <= 6) {
    return minutesToHandleProblems + 2;
  }

  if (maxDepth <= 12) {
    return minutesToHandleProblems + 3;
  }

  if (maxDepth <= 15) {
    return minutesToHandleProblems + 4;
  }

  if (maxDepth > 15) {
    const metresUpTo15 = maxDepth - 15;
    const timeTo15 = Math.ceil(metresUpTo15 / 9); // 9metres / min up to 15m level
    return minutesToHandleProblems + timeTo15 + 4; //4min extra for 15m-12m, 12m-6m, 6m-3m, 3m-surface
  }
}

export default props => (
  <div>
    <p>
      Time needed to ascend from {props.maxDepth}m is{" "}
      {calculate(props.maxDepth)}
      minutes
    </p>
  </div>
);
