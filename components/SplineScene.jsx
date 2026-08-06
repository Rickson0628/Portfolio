"use client";

import Spline from "@splinetool/react-spline";


const SplineScene = ({ scene, className }) => {
  return (
    <Spline
      scene={scene}
      className={className}
    />
  );
};

export default SplineScene;