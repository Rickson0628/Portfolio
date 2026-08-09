"use client";

import Spline from "@splinetool/react-spline";

const SplineScene = ({ scene, className, onLoad }) => {
  return <Spline scene={scene} className={className} onLoad={onLoad} />;
};

export default SplineScene;