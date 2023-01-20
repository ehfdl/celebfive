import React from "react";
import { useLocation } from "react-router-dom";

const Result = () => {
  const { state } = useLocation();
  return <div>{state}</div>;
};

export default Result;
