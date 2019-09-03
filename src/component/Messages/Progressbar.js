import React from "react";
import { Progress } from "semantic-ui-react";

const ProgressBar = ({ uploadState, percentage }) => {
  return (
    uploadState && (
      <Progress
        percent={percentage}
        size="medium"
        className="progress__bar"
        inverted
        indicating
        progress
      ></Progress>
    )
  );
};

export default ProgressBar;
