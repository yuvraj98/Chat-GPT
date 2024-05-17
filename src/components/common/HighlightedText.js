

import React from "react";

const HighlightedText = ({text}) => {
  return (
    <span className="bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] text-transparent bg-clip-text font-bold text-4xl font-inter">
      {" "}
      {text}
    </span>
  );
};

export default HighlightedText;
