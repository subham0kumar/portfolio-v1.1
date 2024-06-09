import React from "react";
import "./loader.css";

const LoadingScreen = () => {
  return (
    <div className="flex flex-col h-screen items-center justify-center gap-10">
      <h1 className="text-4xl">🙏 ।। नमस्ते ।। 🙏</h1>
      <div className="loader"></div>
    </div>
  );
};

export default LoadingScreen;
