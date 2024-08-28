import React from "react";
import "./loader.css";

const LoadingScreen = () => {
  return (
    <div className="flex flex-col h-screen items-center justify-center gap-10">
      <div class="spinner"></div>
    </div>
  );
};

export default LoadingScreen;
