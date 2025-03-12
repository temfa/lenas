"use client";
// import Header from "@/components/header";
import React from "react";
import { InfinitySpin } from "react-loader-spinner";

const Loading = () => {
  return (
    <div className="loader-container">
      <div className="loader-overlay">
        {/* <Header /> */}
        <div className="loader-text">
          <InfinitySpin width="200" color="#fff" />
          <h2>Loading</h2>
        </div>
      </div>
    </div>
  );
};

export default Loading;
