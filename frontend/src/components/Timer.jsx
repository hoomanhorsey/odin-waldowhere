import { formatTime } from "../utils/formatTime";

function Timer({ timer }) {
  return <div>[Timer: {formatTime(timer)}]</div>;
}

export default Timer;
