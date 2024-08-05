import React from "react";


interface TValues {
  text: string
}

const Din: React.FC<TValues> = ({ text }) => {
  return <div>{text}</div>;
};

export default Din;
